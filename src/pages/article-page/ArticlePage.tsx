import { Link, useParams } from 'react-router-dom';
import { Article, NewsData } from '../news/NewsData';

import './ArticlePage.scss';
    
const articles: Article[] = NewsData; 

const ArticlePage = () => {

    let { id } = useParams<{ id: string }>();
    const article = articles.find(article => article.title === id);

    console.log({id});

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <article>
            <h2>Strona Artykułu {id}</h2>
            <p>{article.title}</p>
            <p>{article.text}</p>
            <Link to="/news">Powrót do tablicy ogłoszeń</Link>
        </article>
    );
};

export default ArticlePage;
