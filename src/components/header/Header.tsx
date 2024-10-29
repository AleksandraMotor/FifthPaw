import './Header.scss';

interface HeaderProps {
    children: string;
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <h1 className='header'>
            <span className='header__title' aria-label='Title of the page'>{children}</span>
        </h1>
    );
};

export default Header;