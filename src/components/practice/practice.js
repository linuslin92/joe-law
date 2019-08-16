import React, { Component, Fragment } from 'react';
import { HashRouter as Router, NavLink as Link, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Hero from '../common/hero';
import Area from './area';
import DefaultPractice from './defaultpractice';

import './practice.scss';
import global from '../../src/styles/global.module.scss';

const image = require.context('../../src/img', true);

export default class Practice extends Component {
    heading = "Practice Area";

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.bgImg,
            image_min: this.props.bgImgMin,
            content: this.props.content
        }
    }
    updateImage = (e) => {
        let page = e.currentTarget.href.split('/#/practice').pop().substr(1).toLowerCase();
        this.setState({
            image: image('./' + page + '.jpg'),
            image_min: image('./' + page + '_low.jpg'),
        });
    }
    render() {
        let CONT = this.state.content;
        return (
            <Fragment>
                <Helmet>
                    <title>{CONT.title}</title>
                    <style>{`
                        @media (min-width: 768px) {
                            .hero-image {
                                background-position-y: 35%;
                            }
                        }
                        @media (max-width: 767px) and (min-width:431px) {
                            .hero-image {
                                background-position-y: 25%;
                            }
                        }
                        @media (max-width: 431px) {
                            .hero-image {
                                background-position-y: 20%;
                            }
                        }
                        `}
                    </style>
                </Helmet>
                <Hero src={ this.state.image } srcmin={ this.state.image_min } />
                <Router>
                    <div className="area_menu">
                        <ul role="tablist" aria-labelledby="practice_header">
                            <li className={global.listitem}>
                                <Link to="/practice/criminal_law" activeClassName="active" role="tab" onClick={this.updateImage}>
                                    <label className="areaLabel">{CONT.areas.criminal_law.title}</label>
                                </Link>
                            </li>
                            <li className={global.listitem}>
                                <Link to="/practice/family_law" activeClassName="active" role="tab" onClick={this.updateImage}>
                                    <label className="areaLabel">{CONT.areas.family_law.title}</label>
                                </Link>
                            </li>
                            <li className={global.listitem}>
                                <Link to="/practice/immigration_law" activeClassName="active" role="tab" onClick={this.updateImage}>
                                    <label className="areaLabel">{CONT.areas.immigration_law.title}</label>
                                </Link>
                            </li>
                            <li className={global.listitem}>
                                <Link to="/practice/personal_injury" activeClassName="active" role="tab" onClick={this.updateImage}>
                                    <label className="areaLabel">{CONT.areas.personal_injury.title}</label>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contentBox" role="tabpanel">
                        <Switch>
                            <Route path="/practice/" exact render={(props)=><DefaultPractice {...props} content={CONT.areas.default} />}></Route>
                            <Route path="/practice/:area" render={ (props) => <Area {...props} content={CONT} /> }></Route>
                        </Switch>
                    </div>
                </Router>
            </Fragment>
        )
    }
}