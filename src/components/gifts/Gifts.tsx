import giftCat from '../../assets/images/giftCat.png';
import CTAButton from '../cta-button/CTAButton';

import './Gifts.scss';

const Gifts = () => {
    return (
        <article className='gifts'>
            <img
                className='gifts__img'
                src={giftCat}
                alt='Image of cat under christmas tree'
            />
            <section className='gifts__article'>
                <h2 className='gifts__title'>Schroniskowe magazyny tekstyliów zawsze bardzo chętnie przyjmą:</h2>
                <ul className='gifts__list'>
                    <li>koce</li>
                    <li>prześcieradła zwykłe (bawełniane)</li>
                    <li>duże ręczniki</li>
                    <li>zabawki dla psów i kotów</li>
                    <li>karma weterynaryjna (sucha i mokra)</li>
                </ul>
                <p>
                    Bardzo prosimy, aby dary rzeczowe dla naszych podopiecznych były czyste, nie muszą być nowe. <br/>
                    Dary można przywozić 7 dni w tygodniu w godzinach 8-20 (prosimy o umieszczanie ich w zielonych kontenerach, które znajdują się tuż za bramą schroniska).
                </p>
                <p><strong>Prosimy o przekazywanie tylko darów wskazanych na liście.</strong></p>
                <p>
                    Jeśli macie Państwo wątpliwości co przywieźć do nas zachęcamy do kontaktu telefonicznego lub mejlowego.
                </p>
                <CTAButton link={'/about-us/contact'} children={'Zobacz trasę'}/>
            </section>
        </article>
    );
};

export default Gifts;