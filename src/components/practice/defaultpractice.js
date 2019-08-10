import React, { Component, Fragment } from 'react';
import './defaultpractice.scss';

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
                <h1>{CONT.title}</h1>
                <p>{CONT.summary}</p>
                {
                    CONT.bullet_points.map((bullet) => (
                        <div key={bullet.id}>
                            <h2>{bullet.label.toUpperCase()}</h2>
                            <ul className={bullet.hasSub === "true" ? "inline-list":""}>
                                {
                                    bullet.list.map((li, i)=>{
                                        if(typeof li == "string") {
                                            return <li key={`list_${i}`}>{li}</li>
                                        } else 
                                        if(typeof li == "object") {
                                            return (
                                                <li key={li.id}>
                                                    <h3>{li.label}</h3>
                                                    <ul>
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
            </Fragment>
        )
    }
}