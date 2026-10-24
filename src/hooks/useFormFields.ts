import { ChangeEvent, useEffect, useState } from 'react';

const fields = { name: '', email: '', phone: '' };
const stringRegExp = /^[А-ЯA-Z ]{3,}$/i;
const numberRegExp = /^[0-9 ()+-]{9,20}$/i;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useFormFields = () => {
    const [errors, setErrors] = useState(fields);
    const [values, setValues] = useState(fields);
    const [dirty, setDirty] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        setErrors({
            name: !stringRegExp.test(values.name) ? 'Введите корректное имя' : '',
            email: !emailRegExp.test(values.email) ? 'Введите email корректно' : '',
            phone: !numberRegExp.test(values.phone) ? 'Телефон не корректен' : '',
        });
    }, [values]);

    useEffect(() => {
        if (!dirty) {
            setIsComplete(true);
            return;
        }
        setIsComplete([...Object.values(errors)].every((el) => el == ''));
    }, [errors, dirty]);

    const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const onDirty = () => {
        setDirty(true);
    };

    return { values, errors, dirty, isComplete, onChange, onDirty };
};
