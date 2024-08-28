import classNames from 'classnames';
import { Component } from 'react';
import './Burger.scss';

class Burger extends Component {
    state = {
        showMenu: false
    }
    render() {
        return (
            <div
                className='burger'
                onClick={() => this.setState({showMenu: !this.state.showMenu})}
            >
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.state.showMenu,
                })}
                ></span>
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.state.showMenu,
                })}
                ></span>
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.state.showMenu,
                })}
                ></span>
            </div> 
        );
    }
};

export default Burger;