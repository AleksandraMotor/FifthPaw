import Header from '../../components/header/Header';
import OurNeeds from '../../components/our-needs/OurNeeds';
import newMobile from '../../assets/images/new-mobile.png';
import newDesktop from '../../assets/images/new-desktop.png';
import classNames from 'classnames';
import { PiArrowDownRightBold } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { useScreenSize } from '../../helpers/ScreenSize';

import './Help.scss';

const Help = () => {

    const screenSize = useScreenSize();

    return (
        <section className='help'>
            <OurNeeds/>
            <Header>Nasze potrzeby, czyli jak pomóc</Header>
            <article className='help-article'>
                <h2 className='help-article__title'>Nowość - Nakarm Zwierzaka!</h2>
                <p className='help-article__content'>
                    Przejdź do zakładki
                    <NavLink className='help-article__link' to={'/adoption'}> Adopcja</NavLink>, 
                    po wybraniu jednego z naszych podopiecznych kliknij "nakarm".
                </p>
                <p className={classNames({
                    'help-article__img-box': true,
                    'help-article__img-box--desktop': screenSize.width > 1000,
                })}>
                    <img
                        src={screenSize.width < 768 ? newMobile : newDesktop} 
                        alt='Image of new option "Nakarm" in adoption subpage.'
                    />
                    <PiArrowDownRightBold />    
                </p>
            </article>
        </section>
    );
};

export default Help;