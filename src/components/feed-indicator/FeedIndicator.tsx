import paw from '../../assets/icons/paw-white.png';

import './FeedIndicator.scss';

const FeedIndicator: React.FC = () => {
    const value = '30%';
    return (
        <div className='feed-indicator'>
            <div className='feed-indicator__box'>
                <div className='feed-indicator__box__value' style={{width: `${value}`}}/>
                <div className='feed-indicator__box__text'>{value}</div>
            </div>
            <button className='feed-indicator__button'>
                <span>nakarm</span>
                <img className='feed-indicator__button__icon' src={paw} alt='Piąta Łapa' />
            </button>
        </div>
    );
};

export default FeedIndicator;