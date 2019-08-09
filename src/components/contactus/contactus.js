import React, { Component, Fragment } from 'react';
import styles from './contactus.scss';
import global from '../../src/styles/global.module.scss';
import Helmet from 'react-helmet';
import Hero from '../common/hero';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }
    render() {
        const CONT = this.state.content;
        let addr2 = <div>{CONT.address2}</div>;
        return (
            <Fragment>
                <Helmet>
                    <title>{CONT.title}</title>
                </Helmet>
                <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
                <div className={global.paddingcontainer}>
                    <div className={global.formRow}>
                        <label className={global.label}>Address</label>
                        <div>{CONT.address1}</div>
                        {addr2.length && addr2}
                        <div>{CONT.city}, {CONT.state} {CONT.zipcode}</div>
                    </div>
                    <div className={global.formRow}>
                        <label className={global.label}>Phone</label>
                        <div><a className={global.link} href={`tel:+1${CONT.phone}`}>{CONT.phone}</a></div>
                    </div>
                    <div className={global.formRow}>
                        <label className={global.label}>Fax</label>
                        <div>{CONT.fax}</div>
                    </div>
                    <div className={global.formRow}>
                        <label className={global.label}>Email</label>
                        <div><a className={global.link} href={`mailto:{CONT.email}`} target="_blank">{CONT.email}</a></div>
                    </div>
                    <div className={global.formRow}>
                        <label className={global.label}>Business Hours</label>
                        {
                            CONT.hours.map((hr)=>(
                                <div>
                                    <div>{hr.begin} to {hr.end}</div>
                                    <div>{hr.open} - {hr.close}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}