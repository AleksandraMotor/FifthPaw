
import { HelpData } from '../../pages/help/HelpData';
import NeedsCard from '../templates/needs-card/NeedsCard';

import './OurNeeds.scss';

const OurNeeds = () => {

    const navList = HelpData.map(item => (
        <li key={item.title}>
            <NeedsCard
                title={item.title}
                icon={item.icon}
            />
        </li>
    ))

    return (
        <ul className="our-needs" aria-label='Subpage navigation'>
            {navList}
        </ul>
    );
};

export default OurNeeds; 