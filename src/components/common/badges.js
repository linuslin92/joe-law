import React, { Component } from 'react';
import './badges.scss';

const image = require.context('../../src/img/badges');

export default class Badges extends Component {
    badges = this.props.array;
    heading = <h1 className="heading1">{this.props.heading}</h1>;
    render() {
        return (
            <div className="badge">
                { this.props.heading ? this.heading : '' }
                <ul>
                    {
                        this.badges.map(aff=>{
                            return (
                                <li key={aff.id}>
                                    <a href={aff.url} target="_blank" rel="noopener noreferrer"><img className="badgeImage" src={image(aff.src)} alt={aff.label} /></a>
                                </li>
                            )
                        })
                    }
                    <li></li>
                </ul>
            </div>
        )
    }
}