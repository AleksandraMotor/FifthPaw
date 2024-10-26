import { Link } from 'react-router-dom';

import './DonateButton.scss';

interface DonateButtonProps {
    text: string;
    link: string;
}

const DonateButton: React.FC<DonateButtonProps> = ({ text, link }) => {
    return (
        <div className='donate-button'>
            <span className='donate-button__name'>{text}</span>
            <Link className='donate-button__link' to={link}>Przekaż 1,5% podatku</Link>
        </div>
    );
};

export default DonateButton;