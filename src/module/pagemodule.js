import React, { Component } from 'react';

import * as styles from './scss/pagemodule.module.scss';

export default class PageModule extends Component {
	render() {
		console.log(this.props);
		return (
			<section className={styles.contentBox}>
				<div className={styles.container}>
					{this.props.children}
				</div>
			</section>
		)
	}
}