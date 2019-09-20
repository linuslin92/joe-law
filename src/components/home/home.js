import React, { Component, Fragment } from 'react';

import badges from '../../content/badges';
// import affiliates from '../../content/affiliates';

import { Helmet } from 'react-helmet';

import Hero from '../common/hero';
import Badges from '../common/badges';

import styles from './home.module.scss';
import global from '../../src/styles/global.module.scss';

export default class Home extends Component {
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
                    <meta 
                        name="description" 
                        content={CONT.meta.description} />
                </Helmet>
                <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
                <div className={global.paddingcontainer}>
                    <h2 className={`${global.heading2} ${global.textcenter} ${global.textshadow1} ${styles.heading2}`}>{CONT.intro.heading}</h2>
                    <q className={global.quote + ' ' + styles.quote}>{CONT.intro.quotation}</q>
                    <div className={styles.author}> - {CONT.intro.author}</div>
                </div>
                <Badges array={ badges } className={global.paddingcontainer} />
                {/* <Badges array={ affiliates } heading="Media Affliates" /> */}
            </Fragment> 
        )
    }
}