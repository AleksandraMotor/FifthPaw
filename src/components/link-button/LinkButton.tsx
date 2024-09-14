import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

import './LinkButton.scss';

interface LinkButtonProps {
    link: string;
    text: string;
    icon: ReactElement;
}

const LinkButton = ({link, text, icon}: LinkButtonProps) => {
    return (
        <Link className='link-button' to={link}>
            <span className='link-button__text'>{text}</span>
            {icon}
        </Link>
    );
};

export default LinkButton;