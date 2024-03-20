
import './AdoptionCard.scss';

interface AdoptionCardProps {
    id: string;
    name: string;
    img: string;
    gender: string;
    age: string;
    desc1: string;
    desc2: string;
};

const AdoptionCard: React.FC<AdoptionCardProps> = ({ id, name, img, gender, age, desc1, desc2 }) => {
    return (
        <div className='adoption-card'>
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