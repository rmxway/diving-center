import { SubmitEventHandler } from 'react';
import { Button, Input } from '@/components/ui';
import { useFormFields } from '@/hooks';
import './style.css';

export const TextUs = () => {
    const { errors, dirty, isComplete, onChange, onDirty } = useFormFields();

    const onSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onDirty();

        const formData = new FormData(event.target);
        const data = JSON.stringify(Object.fromEntries(formData.entries()));

        if (isComplete && dirty) {
            console.log('Данные успешно сформированы: ', data);
        }
    };

    return (
        <div className="text-us">
            <div className="container">
                <div className="text-us-wrapper">
                    <div className="text-us-info">
                        Оставьте заявку на групповое погружение и мы с Вами свяжемся в ближайшее время. Наш консультант ответит на все ваши вопросы и расскажет что делать дальше.
                    </div>
                    <form className="text-us-form" onSubmit={onSubmit}>
                        <Input placeholder="Имя" name="name" error={!!errors.name && dirty ? errors.name : ''} onChange={onChange} />
                        <Input placeholder="E-mail" name="email" error={!!errors.email && dirty ? errors.email : ''} onChange={onChange} />
                        <Input placeholder="Телефон" name="phone" error={!!errors.phone && dirty ? errors.phone : ''} onChange={onChange} />
                        <Button type="submit" disabled={!isComplete}>
                            Отправить
                        </Button>
                    </form>
                </div>
                <img src="img/aqualung.png" alt="акваланг" className="aqualung" />
            </div>
        </div>
    );
};
