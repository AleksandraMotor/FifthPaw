import { foundations } from '../../pages/help/HelpData';
import DonateButton from '../donate-button/DonateButton';

import './Donate.scss';

const Donate = () => {

    const foundationsList = foundations.map((item, id) => (
        <li key={id}>
            <DonateButton text={item.name} link={item.link}/>
        </li>
    ));

    return (
        <section className='donate'>
            <div className='donate--left'>
                <article className='donate__article'>
                    <div className='donate__article--box'>
                        <h2 className='donate__title donate__title--left'>
                            Pomagaj dalej z nami i wybierz swoją Fundację:
                        </h2>
                        <ul className='donate__tiles'>
                            {foundationsList}
                        </ul>
                    </div>
                </article>
                <article className='donate__article'>
                    <div className='donate__article--box'>
                       <h2 className='donate__title donate__title--left'>
                            Pieniądze, które trafiają do nas z Waszego 1,5%, to:
                        </h2>
                        <ul className='donate__list'>
                            <li>dobrej jakości karma</li>
                            <li>leki i materiały medyczne</li>
                            <li>nowoczesne, wygodne i higieniczne klatki dla schroniskowych kotów</li>
                            <li>pieniądze na specjalistyczne badania i konsultacje u najlepszych specjalistów</li>
                        </ul>
                        <strong>
                            To wymierna i realna pomoc. Pomoc, którą trudno przecenić! 
                        </strong> 
                    </div>
                </article>
            </div>
            <div className='donate--right'>
                <article className='donate__article--right'>
                    <div className='donate__article--box'>
                        <h2>
                            Wpłata darowizny na konto:
                        </h2>
                        <p>
                            ABC National Bank X.Y. <br/>
                            00 0000 0000 0000 0000 0000 0000<br/>
                            BIC (SWIFT): XXXXXXXXXXX<br/>
                            tytuł wpłaty: DAROWIZNA SCHRONISKO<br/>
                        </p>
                        <strong>
                            Czy wiecie, że przekazując nam darowiznę możecie Państwo odliczyć ją od dochodu !?!
                        </strong>
                        <p>
                            Podatnik może odliczyć wydatki z tytułu darowizn na rzecz organizacji prowadzących 
                            działalność pożytku publicznego w ramach limitu 6% dochodu u osób fizycznych, 
                            a 10% u osób prawnych. Czyli przed opodatkowaniem można sobie obniżyć podstawę 
                            dochodu od którego obliczamy podatek.
                            To odliczenie jest inną formą pomocy niż 1,5% dla OPP.   
                        </p>
                        <p>
                            Odliczenie przysługuje pod warunkiem, że wysokość darowizny jest udokumentowana 
                            dowodem wpłaty na rachunek bankowy obdarowanego, a w przypadku darowizny innej niż pieniężna - dokumentem, 
                            z którego wynika wartość tej darowizny oraz oświadczeniem obdarowanego o jej przyjęciu.
                        </p>
                    </div>    
                </article> 
            </div>
        </section>
    );
};

export default Donate;