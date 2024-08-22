import React from "react";
import { BrowserRouter } from "react-router-dom";
import classNames from "classnames";
import logo from '../../assets/logos/logo.png';
import Home from "../pages/home/Home";
import WorkInProgress from "../components/work-in-progress/WorkInProgress";
import Footer from "../components/footer/Footer";
import Adoption from "../pages/adoption/Adoption";

import './Layout.scss';

class Layout extends React.Component<{ screenWidth: number }, {currentView: string, menu: boolean}> {

    state = {
        currentView: 'home',
        menu: false
    }

    render() {
        const switchView = () => {
            switch(this.state.currentView) {
                case 'home': return <Home/>;
                case 'adopt': return <Adoption/>;
                case 'news': return <WorkInProgress/>;
                case 'help': return <WorkInProgress/>;
                case 'about us': return <WorkInProgress/>;
                case 'contact': return <WorkInProgress/>;
            }
        }

        return (
            <div className='layout'>
                {/* <span>{this.props.screenWidth}</span> */}
                <nav className='layout__menu'>
                    <div
                        className='layout__menu__logo'
                        onClick={(e) => this.setState({currentView: 'home'})}
                    >
                        <img src={logo} alt="Logo PiątaŁapa"/>
                    </div>
                    {this.props.screenWidth < 1024 && (
                        <div
                            className='layout__menu__burger'
                            onClick={() => this.setState({menu: !this.state.menu})}
                        >
                            <span className={classNames({
                                'layout__menu__burger__line':true,
                                'layout__menu__burger__line--hide': this.state.menu,
                            })}
                            ></span>
                            <span className={classNames({
                                'layout__menu__burger__line':true,
                                'layout__menu__burger__line--hide': this.state.menu,
                            })}
                            ></span>
                            <span className={classNames({
                                'layout__menu__burger__line':true,
                                'layout__menu__burger__line--hide': this.state.menu,
                            })}
                            ></span>
                        </div> 
                        )}
                    <div className={classNames({
                        'layout__menu__navigation': true,
                        'layout__menu__navigation--hide': (!this.state.menu),
                        'layout__menu__navigation--desktop': (this.props.screenWidth >= 1024),
                    })}>
                        <span
                            className={classNames({
                                'layout__menu__navigation__tab': true,
                                'layout__menu__navigation__tab--active': this.state.currentView === 'adopt',
                            })}
                            onClick={(e) => this.setState({currentView: 'adopt'})}
                        >
                            adopcja
                        </span>
                        <span
                            className={classNames({
                                'layout__menu__navigation__tab': true,
                                'layout__menu__navigation__tab--active': this.state.currentView === 'news',
                            })}
                            onClick={(e) => this.setState({currentView: 'news'})}
                        >
                            ogłoszenia
                        </span>
                        <span
                            className={classNames({
                                'layout__menu__navigation__tab': true,
                                'layout__menu__navigation__tab--active': this.state.currentView === 'help',
                            })}
                            onClick={(e) => this.setState({currentView: 'help'})}
                        >
                            jak pomóc?
                        </span>
                        <span
                            className={classNames({
                                'layout__menu__navigation__tab': true,
                                'layout__menu__navigation__tab--active': this.state.currentView === 'about us',
                            })}
                            onClick={(e) => this.setState({currentView: 'about us'})}
                        >
                            o nas
                        </span>
                        <span
                            className={classNames({
                                'layout__menu__navigation__tab': true,
                                'layout__menu__navigation__tab--active': this.state.currentView === 'contact',
                            })}
                            onClick={(e) => this.setState({currentView: 'contact'})}
                        >
                            kontakt
                        </span>
                    </div>
                </nav>
                <main className='layout__main'>
                    {switchView()}
                </main>
                <footer className='layout__footer'>
                    <div
                        className='layout__footer__logo'
                        onClick={(e) => this.setState({currentView: 'home'})}
                    >
                        <img src={logo} alt="Logo PiątaŁapa"/>
                    </div>
                    <Footer/>
                </footer>
            </div>
        );
    };
};

export default Layout;