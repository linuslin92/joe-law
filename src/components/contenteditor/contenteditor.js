import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../common/hero';

import styles from './contenteditor.module.scss';
import global from '../../src/styles/global.module.scss';
import Editor from '../editor/editor';
import Select from '../select/select';

export default class ContentEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sitename: props.content.sitename,
			home: this.props.content.home,
			practice: this.props.content.practice,
			bio: this.props.content.bio,
			contactus: this.props.content.contactus,
			footer: this.props.content.footer,
			pageNotFound: this.props.content.pageNotFound,
			navbar: this.props.content.navbar,
			pageSelected: null,
		}
	}

	select = (e) => {
		this.setState({
			pageSelected: e.currentTarget.value
		})
	}

	render() {
		let CONT = {};
		let form;
		let selector;

		if(this.state.pageSelected) {
			switch(this.state.pageSelected) {
				case 'sitename':
					CONT = this.state.sitename;
					break;
				case 'home':
					CONT = this.state.home;
					break;
				case 'practice':
					CONT = this.state.practice;
					break;
				case 'bio':
					CONT = this.state.bio;
					break;
				case 'contactus':
					CONT = this.state.contactus;
					break;
				case 'footer':
					CONT = this.state.footer;
					break;
				case 'pageNotFound':
					CONT = this.state.pageNotFound;
					break;
				default:
			}
			form = (
				<Editor 
					data={{
						content: CONT
					}}
					page={this.state.pageSelected}
				/>
			)
		} 

		let options = [{
			label: 'Site name',
			value: 'sitename'
		},{
			label: 'Home',
			value: 'home'
		},{
			label: 'Practice',
			value: 'practice'
		},{
			label: 'Bio',
			value: 'bio'
		},{
			label: 'Contact us',
			value: 'contactus'
		},{
			label: 'Footer',
			value: 'footer'
		},{
			label: 'Page not found',
			value: 'pageNotFound'
		}];
		selector = (
			<Select
				data={
					{options,
					...{label: 'Editing Module'}}
				}
				events={{
					onChange: this.select
				}}
			/>
		)
		return (
			<Fragment>
				<Helmet>
					<title></title>
					<meta
						name="robots"
						content="noindex, nofollow"
					/>
					<Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
				</Helmet>
				{selector}
				{form}
			</Fragment>
		)
	}
}