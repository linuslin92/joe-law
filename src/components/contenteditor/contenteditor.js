import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../common/hero';

import styles from './contenteditor.module.scss';
import global from '../../src/styles/global.module.scss';

export default class ContentEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: this.props.content
		}
	}

	showform (e) {
		console.log('R!E$!', e)
	}

	showinput (e) {
		console.log('#$!!R', e);
	}

	showsubmenu (e) {
		e.stopPropagation();
		const tar = e.target.parentNode;
		tar.classList.toggle(styles.expanded);
	}

	createtree(obj) {
		const keys = Object.keys(obj);
		let list;
		keys.map(key=>{
			const item = obj[key];
			if(typeof item === 'object') {
				list = (
					<Fragment>
						{list}
						<li 
							className={`${styles.expanded} ${styles.hasSubMenu}`}
							onClick={this.showsubmenu}
						>
							<label>{key}</label>
							<ul>
								{this.createtree(item)}
							</ul>
						</li>
					</Fragment>
				)
			} else {
				if (item.length < 40) {
					list = (
						<Fragment>
							{list}
							<li>
								<label>{key}: </label><input type="text" value={item} />
							</li>
						</Fragment>
					)
				} else {
					list = (
						<Fragment>
							{list}
							<li className={styles.aligntop}>
								<label>{key}: </label><textarea type="text" value={item} />
							</li>
						</Fragment>
					)
				}
			}
		})
		return list;
	}

	render() {
		const CONT = this.state.content;
		const arr = Object.entries(CONT);
		let submenu;
		submenu = this.createtree(CONT);
		return (
			<Fragment>
				<Helmet>
					<title>{CONT.contenteditor.title}</title>
					<meta
						name="robots"
						content="noindex, nofollow"
					/>
				</Helmet>
				<Hero src={ this.props.bgImg } srcmin={ this.props.bgImgMin } />
				<div className={global.paddingcontainer}>
					<h2 className={`${global.heading2} ${global.textcent} ${global.textshadow6}`}>{CONT.contenteditor.title}</h2>
					<div className={styles.maincontent}>
						<div className={styles.flexbox}>
							<ul className={styles.tree}>
							{
								submenu
							}
							</ul>
						</div>
						<form>
							<input type="hidden" name="lang" value={CONT.lang} />
						</form>
					</div>
				</div>
			</Fragment>
		)
	}
}