import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import './bio.scss';
import global from '../../src/styles/global.module.scss';
import Hero from '../common/hero';

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
                <Hero src={this.props.bgImg} srcmin={this.props.bgImgMin} />
                <div className={global.paddingcontainer}>
                    {
                        CONT.content.map((c, i)=>
                            <p className={global.description} key={`p_${i}`}>{c}</p>
                        )
                    }
                </div>
            </Fragment>
        )
    }
}