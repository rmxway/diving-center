import { forwardRef, JSX } from 'react';
import './style.css';

type InputType = JSX.IntrinsicElements['input'] & {
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputType>(({ error, type = 'text', ...props }, ref) => {
    return (
        <div className="input-group">
            <input className={`form-input ${error && 'input-error'}`} autoComplete="off" autoSave="off" {...{ ref, type, ...props }} />
            {error && <div className="error">{error}</div>}
        </div>
    );
});
