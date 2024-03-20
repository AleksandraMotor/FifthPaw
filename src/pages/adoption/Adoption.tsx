import Filter from '../../components/filter/Filter';

import './Adoption.scss';

const Adoption: React.FC = () => {
    return (
        <div className='adoption'>
            <h1 className='adoption__header'>
                Zwierzęta do adopcji
            </h1>
            <div className='adoption__search'>
                <Filter/>
            </div>
        </div>
    );
};

export default Adoption;