import { Component } from "react"
import NavigationMobile from "./navigation-mobile/NavigationMobile"
import NavigationDesktop from "./navigation-desktop/NavigationDesktop"

import './Navigation.scss';

class Navigation extends Component<{ screenWidth: number }> {

    render() {
        if (this.props.screenWidth < 1024) {
            return (
                <NavigationMobile/>
            )
        }
        return (
            <NavigationDesktop/>
        )
    };
};

export default Navigation;