import { OurStoriesData } from './OurStoriesData';
import StoryArticle from '../templates/story-article/StoryArticle';

import './OurStories.scss';

const OurStories = () => {

    const storiesList = OurStoriesData.map((story, index) => (
        <li key={index} id={story.title}>
            <StoryArticle title={story.title} text={story.text} image={story.image}/>
        </li>
    ))

    return (
        <section className='our-stories'>
            <h2 className='our-stories__title'>nasze historie</h2>
            <ul className='our-stories__list'>
                {storiesList}
            </ul>
        </section>
    );
};

export default OurStories;