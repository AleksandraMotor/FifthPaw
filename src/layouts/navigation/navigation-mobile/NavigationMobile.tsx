import { Component } from "react";
import { menuOptions } from "../NavigationData";
import { NavLink } from "react-router-dom";
import Burger from "../../../components/burger/Burger";

import './NavigationMobile.scss';

class NavigationMobile extends Component {
    state = {
        showMenu: false
    };

    render() {
        const menu = menuOptions.map(option => (
            <li key={option.name} className='navigation-mobile__link'>
                <NavLink to={option.path}>{option.name}</NavLink>
            </li>
        ));
        return (
            <>
                <button aria-label="Show/Hide Menu" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                    <Burger showMenu={this.state.showMenu}/>
                </button>
                {this.state.showMenu && (
                   <ul className='navigation-mobile'>
                        {menu}
                    </ul> 
                )}
            </>
        );
    }
};

export default NavigationMobile;