import { FC } from 'react';
import './style.css';

type ButtonType = {
    inline?: boolean;
    children: React.ReactNode;
};

export const Button: FC<ButtonType> = ({ inline, children }) => {
    return <button className={`btn ${inline && 'btn-inline'}`}>{children}</button>;
};
