import { useParams } from 'react-router-dom';
import { Article, NewsData } from '../news/NewsData';
import { PiArrowUDownLeftBold } from "react-icons/pi";
import img from '../../assets/images/cats.jpg';
import LinkButton from '../../components/link-button/LinkButton';

import './ArticlePage.scss';
    
const articles: Article[] = NewsData; 

const ArticlePage = () => {

    let { id } = useParams<{ id: string }>();
    const article = articles.find(article => article.title === id);

    if (!article) {
        return (
            <article className='article'>
                <h1 className='article__title' aria-label='Article not found'>{id}</h1>
                <img className='article__image' src={img} alt="Article not found"/>
                <p className='article__text'>
                    Article not found
                </p>
                <LinkButton link='/news' text='Powrót do tablicy ogłoszeń' icon={<PiArrowUDownLeftBold />} />
            </article>
        );
    };

    return (
        <article className='article'>
            <h1 className='article__title'>{article.title}</h1>
            {article.img && (
                <img className='article__image' src={article.img} alt={article.title}/>
            )}
            {article.text && (
                <p className='article__text'>{article.text}</p>   
            )}
            <LinkButton link='/news' text='Powrót do tablicy ogłoszeń' icon={<PiArrowUDownLeftBold />} />
        </article>
    );
};

export default ArticlePage;
