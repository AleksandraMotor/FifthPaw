import { TopDonorsData } from './TopDonorsData';

import './TopDonors.scss';

const TopDonors: React.FC = () => {
    return (
        <div className='top-donors'>
            { TopDonorsData.map((item, index) => {
                return (
                    <img src={item.logo} alt={item.title} />
                )                      
            })}
        </div>
    );
};

export default TopDonors;