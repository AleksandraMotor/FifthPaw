import { NewsData } from './NewsData';
import ArticleShort from '../../components/templates/article-short/ArticleShort';
import paw from '../../assets/icons/paw-white.png';
import './News.scss';

const News = () => {

    const newsList = NewsData.map(article => (
        <li key={article.title}>
            <ArticleShort
                title={article.title} 
                type={article.type} 
                img={article.img} 
                text={article.text}
            />
        </li>
    ));

    return (
        <section className='news'>
            <img className='news__image' src={paw} alt="paw icon" width={50}/>
            <h1 className='news__header'>tablica ogłoszeń</h1>
            <ul className='news__list'>
                {newsList}
            </ul>
        </section>
    );
};

export default News;