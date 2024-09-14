import { NewsData } from '../../pages/news/NewsData';
import AliceCarousel from 'react-alice-carousel';
import NewsCard from '../templates/news-card/NewsCard';

import './Annoucements.scss';

const Annoucements: React.FC = () => {
  const responsive = {
    0: { 
      items: 1
    },
    690: { 
      items: 2
    },
    1035: {
      items: 3, 
      itemsFit: 'contain'
    },
    1380: {
      items: 4,
    },
    1800: {
      items: 5,
    },
    2100: {
      items: 6,
    },
  };

  const items = NewsData.map((item, index) => (
    <NewsCard
      key={index}
      type={item.type}
      title={item.title} 
      img={item.img} 
      text={item.text}
    />
  ));
    
  return (
    <div id='annoucements' className='annoucements'>
      <div className="annoucements__carousel">
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            items={items}
            infinite
            autoPlayInterval={3000}
            autoPlay={true}
            disableDotsControls
            disableButtonsControls
            keyboardNavigation
          />
      </div>
    </div>
  );
};

export default Annoucements;