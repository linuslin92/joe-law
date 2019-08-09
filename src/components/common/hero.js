import React, { Component } from 'react';
import './hero.scss';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.src,
            imgMin: this.props.srcmin
        }
    }
    static getDerivedStateFromProps(props, state) {
        if(props.src !== state.image) {
            return { image: props.src, image_min: props.srcmin }
        } else {
            return { ...state }
        }
    }
    render() {
        return (
            <div className="hero-image" style={{...this.props.style,...{"backgroundImage": "url(" + this.state.image + "), url(" + this.props.srcmin + ")"}}}></div>
        )
    }
}