import paw from '../../assets/icons/paw-white.png';

import './Header.scss';

interface HeaderProps {
    children: string;
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <h1 className='header'>
            <span className='header__title' aria-label='Title of the page'>{children}</span>
            <img className='header__image' src={paw} alt="paw icon"/>
        </h1>
    );
};

export default Header;