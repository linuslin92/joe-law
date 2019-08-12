import React, { Component, Fragment } from 'react';
import styles from './defaultpractice.module.scss';
import layouts from '../../src/styles/layout.module.scss';

export default class DefaultPractice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
    }
    render() {
        const CONT = this.state.content;
        return (
            <Fragment>
                <div className={layouts.descriptionpanel}>
                    <h1>{CONT.title}</h1>
                    <p>{CONT.summary}</p>
                </div>
                <div className={styles.flexlist}>
                {
                    CONT.bullet_points.map((bullet) => (
                        <div key={bullet.id} className={styles.flexitem}>
                            <h2>{bullet.label.toUpperCase()}</h2>
                            <ul className={bullet.hasSub === "true" ? styles.inlinelist :""}>
                                {
                                    bullet.list.map((li, i)=>{
                                        if(typeof li == "string") {
                                            return <li key={`list_${i}`}>{li}</li>
                                        } else 
                                        if(typeof li == "object") {
                                            return (
                                                <li key={li.id}>
                                                    <h3 className={styles.inlinetitle}>{li.label}</h3>
                                                    <ul className={styles.disc}>
                                                    {
                                                        li.sublist.map((sub, j)=>{
                                                            return <li key={`sub_${j}`}>{sub}</li>
                                                        })
                                                    }
                                                    </ul>
                                                </li>
                                            )
                                        } else {
                                            return <li key={i}></li>
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    ))
                }
                </div>
            </Fragment>
        )
    }
}