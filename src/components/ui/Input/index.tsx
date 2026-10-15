import { FC, InputHTMLAttributes } from 'react';
import './style.css';

type InputType = {
    error?: string;
};

export const Input: FC<InputHTMLAttributes<HTMLInputElement> & InputType> = ({ error, type = 'text', ...props }) => {
    return (
        <div className="input-group">
            <input className={`form-input ${error && 'input-error'}`} type={type} autoComplete="off" autoSave="off" {...props} />
            {error && <div className="error">{error}</div>}
        </div>
    );
};
