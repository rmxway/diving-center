export const ServiceItem = ({ service }) => {
    const { icon, title, description } = service;
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
