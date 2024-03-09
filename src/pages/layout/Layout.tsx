import React from "react";
import classNames from "classnames";
import logo from '../../assets/logos/logo.png';
import Home from "../home/Home";
import WorkInProgress from "../../components/work-in-progress/WorkInProgress";

import './Layout.scss';
import Footer from "../../components/footer/Footer";

class Layout extends React.Component<{ screenWidth: number }, {currentView: string, menu: boolean}> {

    state = {
        currentView: 'home',
        menu: false
    }

    render() {
        const switchView = () => {
            switch(this.state.currentView) {
                case 'home': return <Home/>;
                case 'adopt': return <WorkInProgress/>;
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
                            {this.state.menu && (
                                <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>
                            )}
                            {!this.state.menu && (
                                <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
                            )}
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