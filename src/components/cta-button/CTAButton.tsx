import React from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom';

import './CTAButton.scss';

interface CTAButtonProps {
    type?: string;
    link: string;
    children: string | JSX.Element | (string | JSX.Element)[];
};


const CTAButton: React.FC<CTAButtonProps> = ({type, link, children}) => {
    return (
        <Link className={classNames({
            'cta-button': true,
            'cta-button--big': type === 'big',
            'cta-button--transparent': type === 'transparent'
        })} to={link}>
            {children}
        </Link>
    );
};

export  default CTAButton;