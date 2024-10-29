import { HashRouter as Router } from 'react-router-dom';
import { useScreenSize } from "../helpers/ScreenSize";
import Navigation from "../layouts/navigation/Navigation";
import Page from "../layouts/page/Page";
import Footer from "../layouts/footer/Footer";
import Logo from "../components/logo/Logo";

import './App.scss';

export default function App() {

    const screenSize = useScreenSize();

    return (
        <Router>
            <div className="app">
                <nav className='app__navigation'>
                    <Logo/>
                    <Navigation screenWidth={screenSize.width}/>
                </nav>
                <main className='app__main'>
                    <Page/>
                </main>
                <footer className='app__footer'>
                    <Footer/>
                </footer>
            </div>
        </Router>
    );
};
