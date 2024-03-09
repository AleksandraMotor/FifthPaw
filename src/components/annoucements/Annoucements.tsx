import React from 'react';
import { AnnoucementsData } from './AnnoucementsData';
import NewsCard from '../templates/news-card/NewsCard';

import './Annoucements.scss';

const Annoucements: React.FC = () => {
    return (
        <div className='annoucements'>
            <div className='annoucements__wrapper'>
                { AnnoucementsData.map((item, index) => {
                    return (
                        <NewsCard
                            key={index}
                            title={item.title}
                            img={item.img}
                            text={item.text}
                            type={item.type}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Annoucements;