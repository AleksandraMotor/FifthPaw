import help from '../../assets/images/help.jpg';
import CTAButton from '../cta-button/CTAButton';

import './Support.scss';

const Support: React.FC = () => {
    return (
        <div className='support'>
            <img className='support__image' src={help} alt="Help our pupils" />
            <div className='support__info'>
                <div className='support__info__content'>
                    <h2 className='support__info__content__title'>Jak możesz pomóc?</h2>
                    <p className='support__info__content__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>
                <CTAButton>Wspieraj</CTAButton>
            </div>
        </div>
    );
};

export default Support;