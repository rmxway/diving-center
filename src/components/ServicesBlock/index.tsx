import { useGetJSON } from '@/useGetJSON';
import { getLocalUrl } from '@/services.js';
import './style.css';
import { ServiceItem } from './ServiceItem';

export interface ServiceItemType {
    icon: string;
    title: string;
    description: string;
}

export const ServicesBlock = () => {
    const { data, error, loading } = useGetJSON<ServiceItemType>(getLocalUrl('services.json'));

    return (
        <section className="services" id="services">
            <div className="container">
                {loading && <p>Идет загрузка...</p>}
                {error && (
                    <p className="error">
                        <i className="fas fa-exclamation-triangle"></i> {error}
                    </p>
                )}
                {!loading && !error && data.length > 0 && data.map((item) => <ServiceItem {...item} key={item.icon} />)}
            </div>
        </section>
    );
};
