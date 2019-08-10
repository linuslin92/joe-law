import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import './pagenotfound.scss';
import global from '../../src/styles/global.module.scss';
import Hero from '../common/hero';

export default class FileNotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: this.props.content
        }
    }

    render() {
        let CONT = this.state.content;
        return (
            <Fragment>
                <Helmet>
                    <title>{CONT.title}</title>
                </Helmet>
                <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
                <div className={global.paddingcontainer}>
                    <h1>{CONT.title}</h1>
                    <p>{CONT.message}</p>
                </div>
            </Fragment>
        )
    }
}