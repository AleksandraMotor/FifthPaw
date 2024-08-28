import classNames from 'classnames';
import { Component } from 'react';
import './Burger.scss';

class Burger extends Component<{showMenu: boolean}> {

    render() {
        return (
            <div
                className='burger'
            >
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.props.showMenu,
                })}
                ></span>
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.props.showMenu,
                })}
                ></span>
                <span className={classNames({
                    'burger__line':true,
                    'burger__line--hide': this.props.showMenu,
                })}
                ></span>
            </div> 
        );
    }
};

export default Burger;