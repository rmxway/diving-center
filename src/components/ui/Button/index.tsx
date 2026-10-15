import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './style.css';

type ButtonType = {
    inline?: boolean;
};

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren<ButtonType>> = ({ inline, children, ...props }) => {
    return (
        <button {...props} className={`btn ${inline && 'btn-inline'}`}>
            {children}
        </button>
    );
};
