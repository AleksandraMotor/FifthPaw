import Annoucements from '../../components/annoucements/Annoucements';
import Banner from '../../components/banner/Banner';
import Feed from '../../components/feed/Feed';
import OurStories from '../../components/our-stories/OurStories';
import Support from '../../components/support/Support';
import TopDonors from '../../components/top-donors/TopDonors';

import './Home.scss';

const Home: React.FC = () => {
    return (
        <div className='home'>
            <section className='home__section'>
                <Banner/>
            </section>
            <section className='home__section'>
                <h2 className='home__section__title'>najnowsze ogłoszenia</h2>
                <Annoucements/>  
            </section>
            <section className='home__section'>
                <Support/>
            </section>
            <section className='home__section'>
                <Feed/>
            </section>
            <section className='home__section'>
                <h2 className='home__section__title'>czołowi darczyńcy</h2>
                <TopDonors/>
            </section>
            <section className='home__section'>
                <p className='home__section__subtitle'>Nasze historie</p>
                <h2 className='home__section__title'>przeczytaj prawdziwe historie</h2>
                <OurStories/>
            </section>
        </div>
    );
};

export default Home;