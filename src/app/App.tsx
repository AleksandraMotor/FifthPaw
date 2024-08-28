import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "../layouts/footer/Footer";
import Page from "../layouts/page/Page";
import Logo from "../components/logo/Logo";
import Navigation from "../layouts/navigation/Navigation";

import './App.scss';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return screenSize;
};

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
