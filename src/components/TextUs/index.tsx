import { SubmitEventHandler, useContext, useEffect, useState } from 'react';
import { Button, Input } from '@/components/ui';
import { useFormFields } from '@/hooks';
import { InputContext } from '@/InputContext';
import './style.css';

export const TextUs = () => {
    const inputRef = useContext(InputContext);
    const [isSuccess, setIsSuccess] = useState(false);
    const [data, setData] = useState('');
    const { values, errors, dirty, isComplete, onChange, onDirty } = useFormFields();

    const onSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onDirty();

        const resultArray = Object.values(values);
        const isValid = resultArray.every((el) => el.length > 0);
        setData(isValid ? JSON.stringify(values) : '');
    };

    useEffect(() => {
        if (isComplete && dirty && data.length > 0) {
            console.log('Данные успешно сформированы: ', data);
            setIsSuccess(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <div className="text-us" id="text-us">
            <div className="container">
                <div className={`text-us-wrapper${isSuccess ? ' success' : ''}`}>
                    {!isSuccess ? (
                        <>
                            <div className="text-us-info">
                                <div>Оставьте заявку на групповое погружение и мы с Вами свяжемся в ближайшее время. Наш консультант ответит на все ваши вопросы и расскажет что делать дальше</div>
                                <img src="img/aqualung.png" alt="акваланг" className="aqualung" />
                            </div>
                            <form className="text-us-form" onSubmit={onSubmit}>
                                <Input placeholder="Имя" name="name" ref={inputRef} error={!!errors.name && dirty ? errors.name : ''} onChange={onChange} />
                                <Input placeholder="E-mail" name="email" error={!!errors.email && dirty ? errors.email : ''} onChange={onChange} />
                                <Input placeholder="Телефон" name="phone" error={!!errors.phone && dirty ? errors.phone : ''} onChange={onChange} />
                                <Button type="submit" disabled={!isComplete}>
                                    Отправить
                                </Button>
                            </form>
                        </>
                    ) : (
                        <div className="text-us-success">
                            <div className="fas fa-check-circle" />{' '}
                            <p>
                                Форма успешно отправлена. <br />
                                Ожидайте звонка нашего менеджера.
                            </p>{' '}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
