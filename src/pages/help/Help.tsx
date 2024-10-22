import Header from '../../components/header/Header';
import OurNeeds from '../../components/our-needs/OurNeeds';

import './Help.scss';

const Help = () => {
    return (
        <section className='help'>
            <OurNeeds/>
            <Header>Nasze potrzeby, czyli jak pomóc</Header>
            <p>
                Nowość "Nakarm zwierzaka"!
            </p>
        </section>
    );
};

export default Help;