import { useState, useEffect } from "react";
import Layout from "../pages/layout/Layout";

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
        <div className="app">
            <span>Width: {screenSize.width}</span>
            <span>Height: {screenSize.height}</span>
            <Layout screenWidth={screenSize.width}/>
        </div>
    );
};