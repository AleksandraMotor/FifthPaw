import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { PiArrowUDownLeftBold } from "react-icons/pi";
import CTAButton from "../cta-button/CTAButton";

import './Volunteer.scss';

const Volunteer = () => {
    return (
        <section className="volunteer">
            <h2 className="volunteer__title">Nabór do wolontariatu</h2>
            <article className="volunteer__article">
                <section className="volunteer__article--left">
                    <div className="requirements">
                        <p className="requirements__header">Wymagania:</p>
                        <ul className="requirements__list">
                            <li>ukończone 18 lat (wymóg bezwzględny)</li>
                            <li>gotowość do podjęcia pracy wolontariusza od zaraz</li>
                            <li>gotowość do pomocy w schronisku przez minimum 3 godziny miesięcznie (preferowany większy wymiar czasowy)</li>
                            <li>umiejętność pracy w zespole, komunikatywność</li>
                            <li>umiejętność radzenia sobie ze stresem</li>
                            <li>chęć do nauki, w tym poszerzanie wiedzy we własnym zakresie</li>
                            <li>znajomość języka polskiego umożliwiająca komunikację i zapoznanie się z materiałami szkoleniowymi</li>
                            <li>mile widziane doświadczenie w opiece nad zwierzętami</li>
                        </ul>
                        <p>Oczywiście musisz lubić zwierzęta i się ich nie bać.</p>
                    </div>
                </section>
                <section className="volunteer__article--right">
                    <p>Wybierz, czy chcesz pomagać kotom czy psom.</p>
                    <div className="tasks-card">
                        <p className="tasks-card__header">koty <FaCat /></p>
                        <p>Do zadań pomocnika wolontariusza należą:</p>
                        <ul className="tasks-card__list">
                            <li>socjalizowanie kotów</li>
                            <li>pomoc w sprzątaniu i karmieniu</li>
                            <li>udział w akcjach promocyjnych</li>
                        </ul>
                    </div>
                    <div className="tasks-card">
                        <p className="tasks-card__header">psy <FaDog /></p>
                        <p>Do zadań pomocnika wolontariusza należą:</p>
                        <ul className="tasks-card__list">
                            <li>spacery</li>
                            <li>socjalizacja</li>
                            <li>pielęgnacja</li>
                            <li>udział w akcjach promocyjnych</li>
                        </ul>
                    </div>
                </section>
            </article>
            <section className="volunteer__sign-up">
                <p>Zapoznaj się z materiałami szkoleniowymi dla kandydatów na wolontariuszy i wypełnij kwestionariusz w schronisku.</p>
                <CTAButton link={"/about-us/contact"}>Mapa<PiArrowUDownLeftBold /></CTAButton>
            </section>
        </section>
    );
};

export default Volunteer;