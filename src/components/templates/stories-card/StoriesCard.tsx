import { Link } from 'react-router-dom';

import './StoriesCard.scss';

interface OurStoriesProps {
    title: string;
    image: string;
    text: string;
};

const StoriesCard: React.FC<OurStoriesProps> = ({ title, image, text }) => {
    return (
        <div className='stories-card'>
            <img 
                className='stories-card__image' 
                src={image} 
                alt={title}
            />
            <h3 className='stories-card__header'>
                {title}
            </h3>
            <p className='stories-card__text'>
                {text}
            </p>
            <Link className='stories-card__cta' to={`/about-us/our-stories#${title}`}>
                Czytaj dalej...
            </Link>
        </div>
    );
};

export default StoriesCard;