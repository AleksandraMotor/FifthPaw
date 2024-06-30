import FeedIndicator from '../../feed-indicator/FeedIndicator';
import description from '../../../assets/icons/description.png';
import tag from '../../../assets/icons/id.png';
import sign from '../../../assets/icons/sign.png';
import calendar from '../../../assets/icons/calendar.png';
import fingerprint from '../../../assets/icons/fingerprint.png';

import './AdoptionCardModal.scss';

interface AdoptionCardModalProps {
    id: string;
    name: string;
    img: string;
    gender: string;
    age: string;
    desc1: string;
    desc2: string;
    url: string;
    breed: string;
    funds: number;
    setShowModal: any;
};

const AdoptionCardModal: React.FC<AdoptionCardModalProps> = ({ id, name, img, gender, age, desc1, desc2, url, breed, funds, setShowModal }) => {
    return (
        <div className='adoption-card-modal'>
            <div className='adoption-card-modal__container'>
                <div
                    className='adoption-card-modal__container__close'
                    onClick={() => setShowModal(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
                    </svg>
                </div>
                <div className='adoption-card-modal__container__details'>
                    <div className='adoption-card-modal__container__details__image'>
                        <img src={img} alt={name} />
                    </div>
                    <div className='adoption-card-modal__container__details__content'>
                        <h2 className='adoption-card-modal__container__details__content__header'>
                            {name}
                        </h2>
                        <p>
                            <img src={tag} alt="Id zwierzęcia" />
                            <span>{id}</span>
                        </p>
                        <p>
                            <img src={sign} alt="Płeć zwierzęcia" />
                            <span>{gender === 'male' ? 'samiec' : 'samica'}</span>
                        </p>
                        <p>
                            <img src={calendar} alt="Wiek zwierzęcia" />
                            <span>{age === 'junior' ? 'junior' : 'senior'}</span>
                        </p>
                        <p>
                            <img src={fingerprint} alt="Rasa zwierzęcia" />
                            <span>{breed}</span>
                        </p>
                        <p>
                            <img src={description} alt="Opis zwierzęcia" />
                            <span>
                                {desc1}
                                {" "}
                                {desc2}
                            </span>
                        </p>
                    </div>
                </div>
                <FeedIndicator fund={funds}/>
                <a className='adoption-card-modal__container__link' href={url} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span>link do adopcji</span>
                </a>
            </div>
        </div>  
    );
};

export default AdoptionCardModal;