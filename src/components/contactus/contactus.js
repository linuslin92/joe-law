import React, { Component, Fragment } from 'react';
import styles from './contactus.module.scss';
import global from '../../src/styles/global.module.scss';
import layout from '../../src/styles/layout.module.scss';
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
        let addr2 = CONT.address2.text;
        return (
            <Fragment>
                <Helmet>
                    <title>{`${CONT.title} | ${CONT.sitename}`}</title>
                </Helmet>
                <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
                <div className={global.paddingcontainer}>
                    <div className={layout.flexbox}>
                        <div className={layout.flex6}>
                            <div className={global.formrow}>
                                <label className={global.label}>{CONT.address1.label}</label>
                                <div className={global.formtext}>{CONT.address1.text}</div>
                                {addr2.length ? <div className={global.formtext}>{addr2}</div>: ''}
                                <div className={global.formtext}>{CONT.city.text}, {CONT.state.text} {CONT.zipcode.text}</div>
                            </div>
                            <div className={global.formrow}>
                                <label className={global.label}>{CONT.phone.label}</label>
                                <div className={global.formtext}><a className={global.link} href={`tel:+1${CONT.phone.text}`}>{CONT.phone.text}</a></div>
                            </div>
                            <div className={global.formrow}>
                                <label className={global.label}>{CONT.fax.label}</label>
                                <div className={global.formtext}>{CONT.fax.text}</div>
                            </div>
                            <div className={global.formrow}>
                                <label className={global.label}>{CONT.email.label}</label>
                                <div className={global.formtext}><a className={global.link} href={`mailto:{CONT.email.text}`} target="_blank" rel="noopener noreferrer">{CONT.email.text}</a></div>
                            </div>
                            <div className={global.formrow}>
                                <label className={global.label}>{CONT.hours.label}</label>
                                {
                                    CONT.hours.text.map((hr, i)=>(
                                        <div className={global.formtext} key={`hr_${i}`}>
                                            <div>{hr.begin} {hr.to} {hr.end}</div>
                                            <div>{hr.open} - {hr.close}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/*<div className={layout.flex6}>
                            <form>
                                <div className={styles.formrow}>
                                    <label className={global.label}>Family Name</label>
                                    <input className={global.forminput} name="lastname" placeholder="Last Name / Family Name" required/>
                                </div>

                                <div className={styles.formrow}>
                                    <label className={global.label}>Given Name</label>
                                    <input className={global.forminput} name="firstname" placeholder="Last Name / Family Name" required/>
                                </div>
                            </form>
                        </div>*/}
                    </div>
                </div>
            </Fragment>
        )
    }
}