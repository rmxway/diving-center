import { useState, useEffect } from 'react';

interface returnUseGetJSON<T> {
    data: T[];
    loading: boolean;
    error: string;
    retry: () => void;
}

export const useGetJSON = function <ArrayType>(url: string = ''): returnUseGetJSON<ArrayType> {
    const [data, setData] = useState<ArrayType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const [attempt, setAttempt] = useState<number>(0);

    useEffect(() => {
        const controller = new AbortController();
        setError('');
        setLoading(true);

        const load = async function () {
            try {
                const response = await fetch(url, {
                    signal: controller.signal,
                });

                if (!response.ok) throw new Error('Сервер не отвечает');

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('Ошибка сервера: данные не в виде массива');
                } else {
                    setData(data);
                }
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        load();

        return () => {
            if (import.meta.env.PROD) controller.abort();
        };
    }, [attempt, url]);

    return {
        data,
        loading,
        error,
        retry: () => setAttempt((prev) => prev + 1),
    };
};
