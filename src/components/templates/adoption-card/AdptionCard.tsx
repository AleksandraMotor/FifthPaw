import { useState } from 'react';
import classNames from 'classnames';
import AdoptionCardModal from '../adoption-card-modal/AdoptionCardModal';
import description from '../../../assets/icons/description.png';
import sign from '../../../assets/icons/sign.png';
import calendar from '../../../assets/icons/calendar.png';
import fingerprint from '../../../assets/icons/fingerprint.png';

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
                    <p>
                        <img src={sign} alt="Płeć zwierzęcia" />
                        <span>{gender === 'male' ? 'samiec' : 'samica'}</span>
                    </p>
                    <p>
                        <img src={calendar} alt="Wiek zwierzęcia" />
                        <span>{age === 'young' ? 'junior' : 'senior'}</span>
                    </p>
                    <p>
                        <img src={fingerprint} alt="Rasa zwierzęcia" />
                        <span>{breed}</span>
                    </p>
                    <p className='adoption-card__info__description'>
                        <img src={description} alt="Opis zwierzęcia" />
                        <span className='adoption-card__info__description__content'>
                            {desc1}
                        </span>
                    </p>
                </div>
            )}
            
        </div>
    );
}

export default AdoptionCard;