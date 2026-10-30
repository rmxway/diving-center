import { useGetJSON } from '@/hooks';
import { ServiceItem, ServiceItemProps } from './ServiceItem';
import { SERVICES_URL } from '@/constants';
import './style.css';

export const ServicesBlock = () => {
    const { data, error, loading } = useGetJSON<ServiceItemProps>(SERVICES_URL);

    return (
        <section className="services" id="services">
            <div className="container">
                {loading && <p>Идет загрузка...</p>}
                {error && (
                    <p className="error">
                        <i className="fa fa-exclamation-triangle"></i> {error}
                    </p>
                )}
                {!loading && !error && data.length > 0 && data.map((item) => <ServiceItem {...item} key={item.icon} />)}
            </div>
        </section>
    );
};
