import { forwardRef, InputHTMLAttributes } from 'react';
import './style.css';

type InputType = {
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement> & InputType>(({ error, type = 'text', ...props }, ref) => {
    return (
        <div className="input-group">
            <input className={`form-input ${error && 'input-error'}`} ref={ref} type={type} autoComplete="off" autoSave="off" {...props} />
            {error && <div className="error">{error}</div>}
        </div>
    );
});
