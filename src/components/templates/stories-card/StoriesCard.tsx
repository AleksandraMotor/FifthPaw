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
                width={140}
                height={140}
            />
            <h3 className='stories-card__header'>
                {title}
            </h3>
            <p className='stories-card__text'>
                {text}
            </p>
            <span className='stories-card__cta'>
                Czytaj dalej...
            </span>
        </div>
    );
};

export default StoriesCard;