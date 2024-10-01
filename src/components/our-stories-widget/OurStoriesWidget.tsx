import StoriesCard from '../templates/stories-card/StoriesCard';
import { OurStoriesData } from '../our-stories/OurStoriesData';

import './OurStoriesWidget.scss';

const OurStoriesWidget: React.FC = () => {
    return (
        <div className='our-stories-widget'>
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

export default OurStoriesWidget;