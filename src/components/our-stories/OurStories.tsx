import StoriesCard from '../templates/stories-card/StoriesCard';
import { OurStoriesData } from './OurStoriesData';

import './OurStories.scss';

const OurStories: React.FC = () => {
    return (
        <div className='our-stories'>
            { OurStoriesData.map((item, index) => {
                return (
                    <StoriesCard
                        key={index}
                        title={item.title}
                        image={item.image}
                        text={item.text}
                    />
                )
            })}
        </div>
    );
};

export default OurStories;