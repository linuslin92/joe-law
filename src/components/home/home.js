import React, { Component, Fragment } from 'react';

import badges from '../../content/badges';
// import affiliates from '../../content/affiliates';

import { Helmet } from 'react-helmet';

import Hero from '../common/hero';
import Badges from '../common/badges';

import './home.scss';

export default class Home extends Component {
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
                <Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
                <div>
                    <h2>{CONT.intro.heading}</h2>
                    <q>{CONT.intro.quotation}</q>
                    <span> - {CONT.intro.author}</span>
                </div>
                <div>
                    {
                        CONT.intro.content.map((c, i)=>
                            <p className="paragraph" key={`p_${i}`}>{c}</p>
                        )
                    }
                </div>
                <Badges array={ badges } />
                {/* <Badges array={ affiliates } heading="Media Affliates" /> */}
            </Fragment> 
        )
    }
}