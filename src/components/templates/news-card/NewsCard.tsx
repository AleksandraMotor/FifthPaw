import classNames from 'classnames';

import './NewsCard.scss';

interface NewsCardProps {
    type?: string;
    title: string;
    img: string;
    text: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ type, title, img, text }) => {
    return (
        <div className='news-card'>
            <svg
                className={classNames({
                    'news-card__pin': true,
                    'news-card__pin--urgent': type === 'urgent',
                })}
                width="49" height="53" viewBox="0 0 49 53" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M48.7828 0.637059L41.1864 52.0403L0.468091 19.76L48.7828 0.637059Z" fill="currentColor"/>
            </svg>
            <span className='news-card__title'>{title}</span>
            <img className='news-card__image' src={img} alt={title} />
            <span className='news-card__text'>{text}</span>
        </div>
    );
};

export default NewsCard;