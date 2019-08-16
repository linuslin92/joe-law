import React, { Component } from 'react';
import styles from './footer.module.scss';
import global from '../../src/styles/global.module.scss';

export default class Footer extends Component {
    render() {
        const CONT = this.props.content;
        return (
            <footer>
                <div className={`${global.container} ${global.inlinetext}`}>
                    <p className={`${styles.contact} ${global.paragraph}`}>
                        <span className={`${styles.nobreak} ${styles.addr}`}>1700 Alma Drive Suite 160, Plano, TX 75075</span>
                        <a className={`${styles.nobreak}`} href="tel:+19724228165">(972) 422 - 8165</a>
                    </p>
                </div>
                <p className={`${styles.copyright}`} dangerouslySetInnerHTML={{__html: CONT.copyright.text}}></p>
            </footer>
        )
    }
}