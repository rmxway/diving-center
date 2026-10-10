import { useState, useEffect } from 'react';

export const useGetJSON = (url = '') => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [attempt, setAttempt] = useState(0);

	useEffect(() => {
		const controller = new AbortController();

		setError('');
		setLoading(true);

		const load = async function () {
			try {
				const response = await fetch(url, { signal: controller.signal });

				if (!response.ok) throw new Error('Сервер не отвечает');

				const data = await response.json();

				if (!Array.isArray(data)) {
					throw new Error('Ошибка сервера: данные не в виде массива');
				} else {
					setData(data);
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		load();

		return () => controller.abort();
	}, [attempt]);

	return { data, loading, error, retry: () => setAttempt((prev) => prev + 1) };
};
