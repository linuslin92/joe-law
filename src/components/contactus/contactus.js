import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

export default class Contact extends Component {
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
                <Helmet>
                    <title>{CONT.title}</title>
                </Helmet>
                <h1>{CONT.title}</h1>
            </Fragment>
        )
    }
}