 import React from 'react';
 import classNames from "classnames";

import './CTAButton.scss';

interface CTAButtonProps {
    type?: string;
    children: string;
}

 const CTAButton: React.FC<CTAButtonProps> = ({type, children}) => {
    return (
        <button className={classNames({
            'cta-button': true,
            'cta-button--orange': type === 'orange',
            'cta-button--brown': type === 'brown'
        })}>
            {children}
        </button>
    );
 };

 export  default CTAButton;