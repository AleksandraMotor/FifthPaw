import { Link } from 'react-router-dom';
import { subPageData } from '../../layouts/sub-page/SubPageData';
import Header from '../../components/header/Header';
import SubPage from '../../layouts/sub-page/SubPage';

import './AboutUs.scss';

interface Option {
    name: string;
    path: string;
}

const options: Option[] = subPageData;

const AboutUs = () => {

    const subList = options.map((option, index) => (
        <li className='about-us__list-item' key={index}>
            <Link className='about-us__link' to={`/about-us/${option.path}`}>{option.name}</Link>
        </li>
    ));

    return (
        <section className='about-us'>
            <Header>o nas</Header>
            <div className='about-us__content'>
                <ul className='about-us__list'>
                  {subList}  
                </ul>
                <SubPage/>
            </div>
        </section>
    );
};

export default AboutUs;