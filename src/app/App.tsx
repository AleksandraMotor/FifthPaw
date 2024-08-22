import { useState, useEffect, Component, ReactNode } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from "../layouts/footer/Footer";
import Navigation from "../layouts/navigation/Navigation";
import Page from "../layouts/page/Page";

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


class App extends Component {
    render() {
        const screenSize = useScreenSize();
        return (
            <Router>
                <div className="app">
                {/* <span>Width: {screenSize.width}</span>
                <span>Height: {screenSize.height}</span> */}
                {/* <Layout screenWidth={screenSize.width}/> */}

                    <nav className='app__menu'>
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
    }
};

export default App;