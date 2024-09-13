import { Link } from "react-router-dom";
import { Article } from "../../../pages/news/NewsData";
import classNames from "classnames";

import './ArticleShort.scss';

const ArticleShort: React.FC<Article> = ({ type, title, img, text }) => {
    const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();
    return (
        <div 
            className='article-short' 
            onDragStart={handleDragStart}         
        >
            <h2 className={classNames({
                'article-short__title': true,
                'article-short--urgent': type === 'urgent',
            })}>
                {title}
            </h2>
            {img && (
                <img className='article-short__image' src={img} alt={title}/>
            )}
            {text && (
                <p className='article-short__text'>{text}</p>   
            )}
            <Link className='article-short__link' to={`/news/${title}`} aria-label='Przejdź do strony artykułu'>Czytaj dalej...</Link>
        </div>
    );
};

export default ArticleShort;