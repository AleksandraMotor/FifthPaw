import { Link } from 'react-router-dom';

import './NeedsCard.scss';

interface NeedsCardProps {
    title: string;
    icon: JSX.Element;
}

const NeedsCard: React.FC<NeedsCardProps> = ({ title, icon }) => {
    return (
        <div className='needs-card'>
            <section className='needs-card-front'>
                {icon}
                <h3>{title}</h3>  
            </section>
            <section className='needs-card-back'>
                <span>{title}</span>  
                <Link className='needs-card-back__link' to={`/help/${title}`}>Zobacz</Link>
            </section>
        </div>
    );
};

export default NeedsCard;