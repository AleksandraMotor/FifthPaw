import doggo from '../../assets/images/sadDoggo.png';
import CTAButton from '../cta-button/CTAButton';

import './Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className='banner'>
            <div className='banner__photo'>
                <img src={doggo} alt="Adoptuj"/>
            </div>  
            <div className='banner__info'>
                <h1 className='banner__info__header'>Nie kupuj!</h1>
                <CTAButton type='big'>Adoptuj!</CTAButton>
            </div>

        </div>
    )
}

export default Banner;