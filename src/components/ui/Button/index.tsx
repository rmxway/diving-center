import { FC, JSX } from 'react';
import './style.css';

type ButtonType = JSX.IntrinsicElements['button'] & {
    inline?: boolean;
};

export const Button: FC<ButtonType> = ({ inline, children, ...props }) => {
    return (
        <button {...props} className={`btn ${inline && 'btn-inline'}`}>
            {children}
        </button>
    );
};
