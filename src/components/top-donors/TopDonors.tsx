import { TopDonorsData } from './TopDonorsData';
import AliceCarousel from 'react-alice-carousel';

import './TopDonors.scss';

const TopDonors: React.FC = () => {

    const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

    const responsive = {
        0: { 
            items: 1
        },
        400: { 
            items: 2
        },
        600: { 
            items: 3
        },
        800: { 
            items: 4
        },
        1000: {
            items: 5, 
            itemsFit: 'contain'
        },
        1200: {
            items: 6, 
        },
        1400: {
            items: 7, 
        },
        1600: {
            items: 8, 
        },
    };

    const donorsList = TopDonorsData.map((item, index) => (
        <div className='top-donors__logo'>
            <img 
                key={index} 
                src={item.logo} 
                alt={item.title} 
                onDragStart={handleDragStart}
            />
        </div>
    ));
    
    return (
        <div className='top-donors'>
            <AliceCarousel 
                responsive={responsive}
                items={donorsList}
                infinite
                autoPlayInterval={1500}
                autoPlay={true}
                disableDotsControls
                disableButtonsControls
            />
        </div>
    );
};

export default TopDonors;