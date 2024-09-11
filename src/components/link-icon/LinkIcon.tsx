import { ReactElement } from "react";

import './LinkIcon.scss';

interface LinkIconProps {
    link: string;
    icon: ReactElement;
}

const LinkIcon = ({ link, icon }: LinkIconProps) => {
    return(
        <a className="link-icon" href={link}>
            {icon}
        </a>
    );
};

export default LinkIcon;