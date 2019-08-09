import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import './pagenotfound.scss';

export default class FileNotFound extends Component {
    constructor({content}) {
        super({content});

        this.state = {
            content: content
        }
    }

    render() {
        let CONT = this.state.content;
        return (
            <Fragment>
                <Helmet>
                    <title>{CONT.title}</title>
                </Helmet>
                <h1>404</h1>
                <p>Page Not Found</p>
            </Fragment>
        )
    }
}