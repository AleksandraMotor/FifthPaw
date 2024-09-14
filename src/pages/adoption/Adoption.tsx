import Filter from '../../components/filter/Filter';
import Header from '../../components/header/Header';

import './Adoption.scss';

const Adoption: React.FC = () => {
    return (
        <div className='adoption'>
            <Header>zwierzęta do adopcji</Header>
            <section className='adoption__search'>
                <Filter/>
            </section>
        </div>
    );
};

export default Adoption;