import Filter from '../../components/filter/Filter';
import paw from '../../assets/icons/paw-white.png';

import './Adoption.scss';

const Adoption: React.FC = () => {
    return (
        <div className='adoption'>
            <img className='adoption__image' src={paw} alt="paw icon" width={50}/>
            <h1 className='adoption__header'>
                zwierzęta do adopcji
            </h1>
            <div className='adoption__search'>
                <Filter/>
            </div>
        </div>
    );
};

export default Adoption;