import React, { Component, Fragment } from 'react';

import global from '../../../src/styles/global.module.scss';
export default class ImmigrationLaw extends Component {
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
                <h2 className={global.heading4}>{CONT.label}</h2>
                <p className={global.description}>{CONT.summary}</p>
                {
                    CONT.bullet_points.map((bullet)=>{
                        return (
                            <div key={bullet.id}>
                                <label className={global.label}>{bullet.label}</label>
                                <ul>
                                    {
                                        bullet.list.map((li, i)=>{
                                            return (
                                                <li className={global.listitem} key={`list_${i}`}>{li}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}