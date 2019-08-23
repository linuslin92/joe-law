import React, { Component } from 'react';

import global from '../../src/styles/global.module.scss';
import styles from './status.module.scss';

export default class Status extends Component {
    render() {
        return (
            <div id="status" className={`${global.formrow} ${this.props.data.display === true ? styles.display : styles.hidden}`}>
                <div className={`${styles.status} ${styles['status' + this.props.data.type]}`}>
                    <i className={`icons-${this.props.data.type}`}></i><span className={styles.message}>{this.props.data.message}</span>
                </div>
            </div>
        )
    }
}