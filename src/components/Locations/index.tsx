import { useGetJSON } from '@/hooks';
import { LocationItem, LocationItemProps } from './LocationItem';
import { getLocalJsonUrl } from '@/helpers';
import './style.css';

export const Locations = () => {
    const { data, error, loading } = useGetJSON<LocationItemProps>(getLocalJsonUrl('locations'));
    return (
        <div className="locations">
            <div className="container">
                <h2>Локации</h2>
                {loading && <p>Идет загрузка...</p>}
                {error && (
                    <p className="error">
                        <i className="fas fa-exclamation-triangle"></i> {error}
                    </p>
                )}
                <div className="locations-wrapper">{!error && !loading && data.length > 0 && data.map((props) => <LocationItem key={props.img} {...props} />)}</div>
            </div>
        </div>
    );
};
