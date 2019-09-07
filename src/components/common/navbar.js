import React, { Component } from 'react';
import { NavLink as Link} from 'react-router-dom';

import config from '../../config/env_conf';
import Dropdown from './dropdown';

import './navbar.scss';
import global from '../../src/styles/global.module.scss';
import getImage from '../../service/getImage';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            content: this.props.content
        }
    }
    menuOptions = {
        default: {
            id: config.USER_LANGUAGE.search(/es/i) > -1 ? '2' : '1'
        },
        options: [
            {
                id: '1',
                label: 'English',
                value: 'en'
            }, 
            {
                id: '2',
                label: 'Español',
                value: 'es'
            }
        ]
    };

    selectLanguage = (str) => {
        this.setState({
            lang: {
                id: str,
                pack: {}
            }
        });
    }

    render() {
        let toggleMenu = (e) => {
            let $menu = e.target.parentNode.parentNode.parentNode;
            let $btn = $menu.childNodes.values().next().value;
            $btn.classList.toggle('active');
        }
        let CONT = this.props.content;
        let LOGO = this.state.content.logo;
        let MENU = CONT.menu;
        let logo = getImage(LOGO.src);

        let svgTri = (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 7.9374998 7.9375002">
                <rect
                style={{opacity:1,fillOpacity:1,stroke:"none",strokeWidth:0,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1}}
                id="rect3717"
                width="5.2916665"
                height="0.5"
                x="1.3229166"
                y="1.12082"
                rx="0.012874651"
                ry="0.009044745" />
                <rect
                style={{opacity:1,fillOpacity:1,stroke:"none",strokeWidth:0,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1}}
                id="rect3719"
                width="5.2916665"
                height="0.5"
                x="1.3229166"
                y="3.44916"
                rx="0.012874651"
                ry="0.009044745" />
                <rect
                style={{opacity:1,fillOpacity:1,stroke:"none",strokeWidth:0,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1}}
                id="rect3721"
                width="5.2916665"
                height="0.5"
                x="1.3229166"
                y="5.7775"
                rx="0.012874651"
                ry="0.009044745" />
            </svg>
        );
        
        return (
            <header>
                <div className={`${global.container}`}>
                    <div className="logo">
                        <Link to={LOGO.path}>
                            <img className="logo_img" src={logo} alt={LOGO.alt} />
                        </Link>
                    </div>
                    <div className="menu">
                        <button className="hamburger" onClick={(e)=>e.target.classList.toggle('active')}>
                            {/* <div className="tribar">&equiv;</div> */}
                            {svgTri}
                        </button>
                        <ul>
                            {
                                MENU.map((item) => {
                                    return (
                                        <li key={item.key}>
                                            <Link to={item.path} onClick={toggleMenu}>{item.label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Dropdown data={ this.menuOptions } handler={ this.eventHandler } callback={ this.selectLanguage } />
                </div>
            </header>
        )
    }
}

export default Navbar;
