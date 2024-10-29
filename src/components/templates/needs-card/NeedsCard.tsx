import { Link } from 'react-router-dom';

import './NeedsCard.scss';

interface NeedsCardProps {
    id: string;
    title: string;
    icon: JSX.Element;
}

const NeedsCard: React.FC<NeedsCardProps> = ({ id, title, icon }) => {
    return (
        <div className='needs-card'>
            <section className='needs-card-front'>
                {icon}
                <span>{title}</span>  
            </section>
            <section className='needs-card-back'>
                <span>{title}</span>  
                <Link className='needs-card-back__link' to={`/help/${id}`}>Zobacz</Link>
            </section>
        </div>
    );
};

export default NeedsCard;