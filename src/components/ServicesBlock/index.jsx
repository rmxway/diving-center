import { useGetJSON } from '../../useGetJSON';
import { getLocalUrl } from '../../services';
import './style.css';
import { ServiceItem } from './ServiceItem';

export const ServicesBlock = () => {
    const { data, error, loading, retry } = useGetJSON(getLocalUrl('services.json'));

    return (
        <section className="services" id="services">
            <div className="container">
                {loading && <p>Идет загрузка...</p>}
                {error && (
                    <p className="error">
                        <i className="fas fa-exclamation-triangle"></i> {error}
                    </p>
                )}
                {!loading && !error && data.length > 0 && data.map((item) => <ServiceItem service={item} key={item.icon} />)}
            </div>
        </section>
    );
};
