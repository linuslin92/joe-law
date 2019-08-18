import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import './pagenotfound.scss';
import '../../src/styles/global.module.scss';
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
                    <title>{`${CONT.title} | ${CONT.sitename}`}</title>
                </Helmet>
                {   this.props.bgImg ?
                        <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />:
                        ''
                }
                <div className={global.paddingcontainer}>
                    <h1 className={global.heading2}>{CONT.title}</h1>
                    <p className={global.description}>{CONT.message}</p>
                </div>
            </Fragment>
        )
    }
}