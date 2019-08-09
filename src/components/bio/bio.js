import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import './bio.scss';

export default class Bio extends Component {
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
                <Helmet>
                    <title>{CONT.title}</title>
                </Helmet>
                <h1>About</h1>
            </Fragment>
        )
    }
}