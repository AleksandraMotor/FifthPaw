import bowl from '../../assets/images/bowl.jpg';
import CTAButton from '../cta-button/CTAButton';

import './Feed.scss';

const Feed: React.FC = () => {
    return (
        <div className='feed'>
            <img className='feed__image' src={bowl} alt="Choose which one you want to feed" />
            <div className='feed__info'>
                <div className='feed__info__content'>
                    <h2 className='feed__info__content__title'>Nakarm zwierzaka</h2>
                    <p className='feed__info__content__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <CTAButton link='/help#feed'>Nakarm</CTAButton>
            </div>
        </div>
    );
};

export default Feed;