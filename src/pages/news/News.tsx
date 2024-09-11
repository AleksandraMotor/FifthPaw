import { Link } from 'react-router-dom';
import { NewsData } from './NewsData';

import './News.scss';

const News = () => {

    const newsList = NewsData.map(article => (
        <li key={article.title}>
            <Link to={`/news/${article.title}`}>Przejdź do strony artykułu "{article.title}"</Link>
        </li>
    ));

    return (
        <div>
            <h1>Nasze ogłoszenia</h1>
            <ul>
                {newsList}
            </ul>
        </div>
    );
};

export default News;