import React, { Component, Fragment } from 'react';

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
                <h2>{CONT.label}</h2>
                <p>{CONT.summary}</p>
                {
                    CONT.bullet_points.map((bullet)=>{
                        return (
                            <div key={bullet.id}>
                                <label>{bullet.label}</label>
                                <ul>
                                    {
                                        bullet.list.map((li, i)=>{
                                            return (
                                                <li key={`list_${i}`}>{li}</li>
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