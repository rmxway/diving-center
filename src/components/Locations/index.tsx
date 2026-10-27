import { useGetJSON } from '@/hooks';
import { LocationItem, LocationItemProps } from './LocationItem';
import { LOCATIONS_URL } from '@/constants';
import './style.css';

export const Locations = () => {
    const { data, error, loading } = useGetJSON<LocationItemProps>(LOCATIONS_URL);
    return (
        <div className="locations" id="locations">
            <div className="container">
                <h2>Локации</h2>
                {loading && <p>Идет загрузка...</p>}
                {error && (
                    <p className="error">
                        <i className="fas fa-exclamation-triangle"></i> {error}
                    </p>
                )}
                <div className="locations-wrapper">{!error && !loading && data.length > 0 && data.map((props, idx) => <LocationItem key={idx} {...props} />)}</div>
            </div>
        </div>
    );
};
