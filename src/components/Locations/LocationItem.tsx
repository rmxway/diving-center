import { FC } from 'react';

export interface LocationItemProps {
    img: string;
    title: string;
    description: string;
    hit: boolean;
}

export const LocationItem: FC<LocationItemProps> = ({ img, title, description, hit }) => {
    return (
        <div className="location-item">
            {hit && (
                <div className="location-hit">
                    Хит
                    <img src="img/hit.svg" alt="hit" />
                </div>
            )}
            <div className="location-block">
                {img && <img className="location-image" src={img} alt={title} />}
                <div className="location-body">
                    {title && <div className="location-title">{title}</div>}
                    {description && <div className="location-description">{description}</div>}
                </div>
            </div>
        </div>
    );
};
