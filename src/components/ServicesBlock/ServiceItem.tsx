import { FC } from 'react';
import { ServiceItemType } from '.';

export const ServiceItem: FC<ServiceItemType> = ({ description, icon, title }) => {
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
