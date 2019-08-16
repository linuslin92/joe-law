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
                            <div className="tribar">&equiv;</div>
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
