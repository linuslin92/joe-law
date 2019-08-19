import React, { Component, Fragment } from 'react';
import styles from './contactus.module.scss';
import global from '../../src/styles/global.module.scss';
import layout from '../../src/styles/layout.module.scss';

import Helmet from 'react-helmet';
import Hero from '../common/hero';
import Status from '../common/status';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            textcount: this.props.content.form.description.maxLength,
            status: {
                type: 'okay',
                display: true,
                message: 'Please enter required fields.'
            }
        }
    }
    keydown = (e) => {
        let timeout = 0;
        if(e.type === 'reset') {
            timeout = 50;
        }
        setTimeout(() => {
            const $count = document.querySelector('#wordcount');
            const $ta = document.querySelector('#textarea');
            $count.setAttribute("textnum", $ta.maxLength - $ta.textLength);
        }, timeout)
    }
    formsubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        fetch('/cgi-bin/contactus.php', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then(data=>data.json())
        .then((e)=>
            console.log(e)
        )
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
                        <div className={`${layout.flex6} ${layout.contentcard}`}>
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
                        <div className={`${layout.flex6} ${layout.contentcard}`}>
                            <label htmlFor="contact" className={global.label}>{CONT.form.label}</label>
                            <form className={global.form} onReset={this.keydown} onSubmit={this.formsubmit} method="POST">
                                <div className={global.formrow}>
                                    <input 
                                        minLength="5" 
                                        type={CONT.form.name.type} 
                                        pattern={CONT.form.name.pattern} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.name.name} 
                                        placeholder={`${CONT.form.name.label} ${CONT.form.name.required ? "- (Required)" : ""}`} 
                                        required={CONT.form.name.required} />
                                </div>

                                <div className={global.formrow}>
                                    <input 
                                        minLength="10" 
                                        type={CONT.form.phone.type} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.phone.name} 
                                        placeholder={`${CONT.form.phone.label} ${CONT.form.phone.required ? "- (Required)" : ""}`} 
                                        required={CONT.form.phone.required} />
                                </div>

                                <div className={global.formrow}>
                                    <input 
                                        minLength="5" 
                                        type={CONT.form.email.type} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.email.name} 
                                        placeholder={`${CONT.form.email.label} ${CONT.form.email.required ? "- (Required)" : ""}`} 
                                        required={CONT.form.email.required} />
                                </div>

                                <div className={global.formrow}>
                                    <input 
                                        minLength="3" 
                                        type={CONT.form.subject.type} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.subject.name} 
                                        placeholder={`${CONT.form.subject.label} ${CONT.form.subject.required ? "- (Required)" : ""}`} 
                                        required={CONT.form.subject.required} />
                                </div>

                                <div className={global.formrow}>
                                    <textarea 
                                        id="textarea"
                                        minLength="5" 
                                        maxLength={CONT.form.description.maxLength} 
                                        className={`${global.textarea} ${styles.textarea}`} 
                                        name={CONT.form.description.name} 
                                        placeholder={`${CONT.form.description.label} ${CONT.form.description.required ? "- (Required)" : ""}`} 
                                        required={CONT.form.description.required}
                                        onKeyDown={this.keydown} 
                                        onChange={this.keydown} />
                                    <div id="wordcount" className={styles.workcount} textnum={this.state.textcount}></div>
                                </div>
                                <div className={`${global.formrow} ${styles.flex}`}>
                                    <button type="submit" className={`${global.button} ${styles.button}`}>{CONT.form.submit}</button>
                                    <button type="reset" className={`${global.button} ${global.ghostlybutton} ${styles.button}`}>{CONT.form.clear}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Status data={this.state.status} />
                </div>
            </Fragment>
        )
    }
}