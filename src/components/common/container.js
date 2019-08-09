import React, { Component } from 'react';
import global from '../../src/styles/global.module.scss';

export default class Container extends Component {
    render() {
        return (
            <div className={`${global.container} ${global.whitebackground} ${global.paddingb5}`}>
                { this.props.children }
            </div>
        )
    }
}
