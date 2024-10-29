import { NavLink } from 'react-router-dom';
import { siteMap } from './FooterData';
import Logo from '../../components/logo/Logo';

import './Footer.scss';

const Footer = () => {

    const linksList = siteMap.slice(1).map(page => (
        <li className='footer-menu__page' key={page.id}>
            <NavLink className='footer-menu__link' to={page.link} aria-label={`Go to ${page.name} page`}>{page.text}</NavLink>
            {page.subpages && (
                <ul className='footer-menu__list'>
                    {page.subpages.map(subpage => (
                       <li className='footer-menu__subpage' key={subpage.id}>
                            {subpage.link && (
                                <NavLink to={subpage.link}>{subpage.text}</NavLink>
                            )}
                            {!subpage.link && (
                                <>{subpage.text}</>
                            )}
                        </li> 
                    ))}
                </ul>
            )}
        </li>
    ));

    return (
        <div className='footer'>
            <Logo/>
            <nav>
               <ul className='footer-menu'>
                    {linksList}
                </ul>
            </nav>
        </div>
    );
};

export default Footer;