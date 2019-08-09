import React, { Component } from 'react';
import './footer.scss';
import global from '../../src/styles/global.module.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={global.container}>
                    <p className="contact">
                        <span className="nobreak addr">1700 Alma Drive Suite 160, Plano, TX 75075</span>
                        <a className="nobreak" href="tel:+19724228165">(972) 422 - 8165</a>
                    </p>
                    <p className="copyright">2019 Copyright &copy; All Rights Reserved.</p>
                </div>
            </footer>
        )
    }
}