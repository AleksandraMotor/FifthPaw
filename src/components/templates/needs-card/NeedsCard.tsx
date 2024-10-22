import { Link } from 'react-router-dom';
import './NeedsCard.scss';

interface NeedsCardProps {
    title: string;
    icon: JSX.Element;
}

const NeedsCard: React.FC<NeedsCardProps> = ({ title, icon }) => {
    return (
        <div>
            {icon}
            <h3>{title}</h3>
            <Link to={`/help/${title}`}>Zobacz</Link>
        </div>
    );
};

export default NeedsCard;