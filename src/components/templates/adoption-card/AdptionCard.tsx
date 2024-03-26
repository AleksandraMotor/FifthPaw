import { useState } from 'react';
import classNames from 'classnames';
import AdoptionCardModal from '../adoption-card-modal/AdoptionCardModal';

import './AdoptionCard.scss';

interface AdoptionCardProps {
    id: string;
    name: string;
    img: string;
    gender: string;
    age: string;
    desc1: string;
    desc2: string;
    url: string;
    breed: string;
};

const AdoptionCard: React.FC<AdoptionCardProps> = ({ id, name, img, gender, age, desc1, desc2, url, breed }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div
            onClick={() => setShowModal(!showModal)}
            className={classNames({
                'adoption-card': true,
                'adoption-card--active': showModal,
            })}
        >
            {showModal && (
                <AdoptionCardModal id={id} name={name} img={img} gender={gender} age={age} desc1={desc1} desc2={desc2} url={url} breed={breed}/>
            )}
            <div className='adoption-card__name'>{name}</div>
            <div className='adoption-card__image'>
                <img src={img} alt={name}/>
            </div>
            {(gender || age || desc1 || id) && (
                <div className='adoption-card__info'>
                    {gender && (
                        <p><span>{gender}</span></p>   
                    )}
                    <p><span>{age}</span></p>
                    <p><span>{desc1}</span></p>
                    <p><span>{desc2}</span></p>
                    <p><span>{id}</span> </p>
                </div>
            )}
            
        </div>
    );
}

export default AdoptionCard;