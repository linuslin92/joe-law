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
                display: false,
                message: 'Please enter required fields.'
            },
            formdata: {
                name: '',
                phone: '',
                email: '',
                subject: '',
                description: ''
            },
            isDirty: false
        }
    }
    keydown = (e) => {
        let timeout = 0;
        if(e.type === 'reset') {
            timeout = 50;
            this.setState({
                isDirty: false
            })
        } else {
            this.keyin(e);
        }
        setTimeout(() => {
            const $count = document.querySelector('#wordcount');
            const $ta = document.querySelector('#textarea');
            $count.setAttribute("textnum", $ta.maxLength - $ta.textLength);
        }, timeout)
    }
    disableall = () => {
        let state = this.state.formdata;
        let keys = Object.keys(state);
        let form = document.querySelector('form');
        keys.map((k) => {
            form[k].disabled = true;
            return true;
        });
    }
    enableall = () => {
        let state = this.state.formdata;
        let keys = Object.keys(state);
        let form = document.querySelector('form');
        keys.map((k) => {
            form[k].disabled = false;
            return true;
        })
    }
    formsubmit = (e) => {
        e.preventDefault();
        let data = this.state.formdata;
        const $status = document.querySelector('#status');
        this.disableall();
        fetch('/cgi-bin/contactus.php', {
            method: "POST",
            mode: "same-origin",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(data=>data.json())
        .then((e)=> {
            let formstate = {
                    display: true,
                    type: e.success === true ? "okay" : "error",
                    message: e.message
                }
            this.setState({status: formstate});
            $status.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                this.setState({
                    status: {
                        display: false
                    }
                });
                this.enableall();
                this.resethandler();
            }, 10000);
        })
        .catch((e)=>{
            let formstate = {
                display: true,
                type: "error",
                message: "Something went wrong, try again later!"
            }
            this.setState({status: formstate});
            $status.scrollIntoView({ behavior: "smooth" });
            setTimeout(()=>{
                this.setState({
                    status: {
                        display: false
                    }
                })
                this.enableall();
            }, 10000);
            console.error(e);
        });

    }
    keyin = (e) => {
        let key = e.target.name;
        let ref = this.refs[key];
        let state = this.state.formdata;
        state[key] = ref.value;
        this.setState({
            formdata: state
        });
    }
    resethandler = (e) => {
        let state = this.state.formdata;
        let keys = Object.keys(state);
        keys.map((k)=>{
            state[k] = '';
            return true;
        });
        this.setState({
            formdata: state
        })
    }
    dirty = (e) => {
        this.setState({
            isDirty: true
        })
    }
    reset = (e) => {
        this.setState({
            isDirty: false
        })
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
                        <div className={`${layout.flex6} ${layout.contentcard} ${styles.contacttiles}`}>
                            <div className={styles.gmap}>
                                <iframe 
                                    className={styles.googlemapframe}
                                    title="google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2548686484492!2d-96.71805828481166!3d33.02341518089832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c18fac051b497%3A0xea4e8eba8639b832!2s1700%20Alma%20Dr%20%23160%2C%20Plano%2C%20TX%2075075!5e0!3m2!1sen!2sus!4v1570421126387!5m2!1sen!2sus"
                                    frameborder="0"
                                    allowfullscreen="" 
                                />
                            </div>
                            <div className={`${global.formrow} ${styles.tile}`}>
                                <label className={global.label}>{CONT.address1.label}</label>
                                <div className={global.formtext}>{CONT.address1.text}</div>
                                {addr2.length ? <div className={global.formtext}>{addr2}</div>: ''}
                                <div className={global.formtext}>{CONT.city.text}, {CONT.state.text} {CONT.zipcode.text}</div>
                            </div>
                            <div className={`${global.formrow} ${styles.tile}`}>
                                <label className={global.label}>{CONT.phone.label}</label>
                                <div className={global.formtext}><a className={global.link} href={`tel:+1${CONT.phone.text}`}>{CONT.phone.text}</a></div>
                            </div>
                            <div className={`${global.formrow} ${styles.tile}`}>
                                <label className={global.label}>{CONT.fax.label}</label>
                                <div className={global.formtext}>{CONT.fax.text}</div>
                            </div>
                            <div className={`${global.formrow} ${styles.tile}`}>
                                <label className={global.label}>{CONT.email.label}</label>
                                <div className={global.formtext}>
                                    <a className={`${global.link} ${styles.breakword}`} href={`mailto:${CONT.email.text}`} target="_blank" rel="noopener noreferrer">
                                    {CONT.email.text}
                                    </a>
                                </div>
                            </div>
                            <div className={`${global.formrow} ${styles.tile}`}>
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
                        <div className={`${layout.flex6} ${layout.contentcard} ${styles.contacttiles}`}>
                            <Status data={this.state.status} />
                            <label htmlFor="contact" className={global.label + ' ' + styles.ctaLabel}>{CONT.form.label}</label>
                            <form className={global.form} onReset={this.keydown} onSubmit={this.formsubmit} onChange={this.dirty} method="POST">
                                <div className={global.formrow}>
                                    <input 
                                        minLength="5" 
                                        type={CONT.form.name.type}
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.name.name} 
                                        placeholder={`${CONT.form.name.label} ${CONT.form.name.required ? "- (" + CONT.form.subject.required_text + ")" : ""}`} 
                                        required={CONT.form.name.required}
                                        onInput={this.keyin} 
                                        ref="name" />
                                </div>

                                <div className={global.formrow}>
                                    <input 
                                        minLength="10" 
                                        type={CONT.form.phone.type} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.phone.name} 
                                        placeholder={`${CONT.form.phone.label} ${CONT.form.phone.required ? "- (" + CONT.form.subject.required_text + ")" : ""}`} 
                                        required={CONT.form.phone.required}
                                        onInput={this.keyin}
                                        ref="phone" />
                                </div>

                                <div className={global.formrow}>
                                    <input 
                                        minLength="5" 
                                        type={CONT.form.email.type} 
                                        className={`${global.input} ${styles.input}`} 
                                        name={CONT.form.email.name} 
                                        placeholder={`${CONT.form.email.label} ${CONT.form.email.required ? "- (" + CONT.form.subject.required_text + ")" : ""}`} 
                                        required={CONT.form.email.required}
                                        onInput={this.keyin}
                                        ref="email" />
                                </div>

                                <div className={global.formrow}>
                                    <select 
                                        className={`${global.select} ${styles.select}`}
                                        name={CONT.form.subject.name}
                                        required={CONT.form.subject.required}
                                        onChange={this.keyin}
                                        ref="subject"
                                        defaultValue>
                                        <option value="" hidden>{CONT.form.subject.label} {CONT.form.subject.required ? "- (" + CONT.form.subject.required_text + ")" : ""}</option>
                                        {
                                            CONT.form.subject.options.map((option,i)=>{
                                                return(
                                                    <option key={`option_${i}`} value={option.value}>{option.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className={global.formrow + ' ' + styles.desc}>
                                    <textarea 
                                        id="textarea"
                                        minLength="5" 
                                        maxLength={CONT.form.description.maxLength} 
                                        className={`${global.textarea} ${styles.textarea}`} 
                                        name={CONT.form.description.name} 
                                        placeholder={`${CONT.form.description.label} ${CONT.form.description.required ? "- (" + CONT.form.subject.required_text + ")" : ""}`} 
                                        required={CONT.form.description.required}
                                        onKeyDown={this.keydown} 
                                        onInput={this.keydown}
                                        ref="description" />
                                    <div id="wordcount" className={styles.wordcount} textnum={this.state.textcount}></div>
                                </div>
                                <div className={`${global.formrow} ${styles.flex}`}>
                                    <button type="submit" className={`${global.button} ${styles.button}`} disabled={!this.state.isDirty}>{CONT.form.submit}</button>
                                    <button 
                                        type="reset" 
                                        className={`${global.button} ${global.ghostlybutton} ${styles.button}`}
                                        onClick={this.resethandler}
                                        disabled={!this.state.isDirty}
                                        >{CONT.form.clear}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}