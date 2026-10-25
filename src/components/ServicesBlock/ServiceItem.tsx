import { FC } from 'react';

export interface ServiceItemProps {
    icon: string;
    title: string;
    description: string;
}

export const ServiceItem: FC<ServiceItemProps> = ({ description, icon, title }) => {
    return (
        <div className="service-item">
            {icon && (
                <div className="icon">
                    <i className={icon}></i>
                </div>
            )}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
        </div>
    );
};
