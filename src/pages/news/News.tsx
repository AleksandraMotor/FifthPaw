import { NewsData } from './NewsData';
import ArticleShort from '../../components/templates/article-short/ArticleShort';
import './News.scss';
import Header from '../../components/header/Header';

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
            <Header>tablica ogłoszeń</Header>
            <ul className='news__list'>
                {newsList}
            </ul>
        </section>
    );
};

export default News;