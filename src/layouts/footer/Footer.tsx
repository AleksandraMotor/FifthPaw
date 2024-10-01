import { NavLink } from 'react-router-dom';
import { socialMediaData } from './FooterData';
import Logo from '../../components/logo/Logo';
import LinkIcon from '../../components/link-icon/LinkIcon';

import './Footer.scss';

const Footer = () => {

    const socialMedia = socialMediaData.map((item, id) => <LinkIcon key={id} link={item.link} icon={item.icon}/>);

    return (
        <div className='footer'>
            <Logo/>
            <nav>
               <ul className='footer-menu'>
                    <li className='footer-menu__item'>
                        <NavLink className='footer-menu__link' to='/adoption' aria-label='Go to adoption page'>adopcja</NavLink>
                    </li>
                    <li className='footer-menu__item'>
                        <NavLink className='footer-menu__link' to='/news' aria-label='Go to news page'>ogłoszenia</NavLink>
                    </li>
                    <li className='footer-menu__item'>
                        <NavLink className='footer-menu__link' to='/help' aria-label='Go to help page'>jak pomóc?</NavLink>
                    </li>
                    <li className='footer-menu__item'>
                        <NavLink className='footer-menu__link' to='/about-us/contact' aria-label='Go to contact page'>kontakt</NavLink>
                        <div className='footer-menu__social-media' aria-label='Social Media Links'>
                            {socialMedia}  
                        </div>
                        <address className='footer-menu__address' aria-label='Adress of FifthPaw Animal Shelter'>
                            FifthPaw 13<br/>
                            12-345 React<br/>
                            WWW3
                        </address>
                    </li>
                </ul> 
            </nav>
        </div>
    );
};

export default Footer;