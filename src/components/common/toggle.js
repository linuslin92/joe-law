import React, { Component } from 'react';
import * as styles from './toggle.module.scss';

export default class Toggle extends Component {
	render() {
		return (
			<div className={styles.toggle}>
				<div className={styles.options}>
					<input
						type="radio"
						name={this.props.data.name}
						value={this.props.data.option1.value}
						defaultChecked={this.props.data.option1.checked}
						onChange={this.props.data.callback}
						title={this.props.data.option1.title}
					/>
					<label className={styles.optLabel}>
						{this.props.data.option1.displayName}
					</label>
				</div>
				<div className={styles.options}>
					<input
						type="radio"
						name={this.props.data.name}
						value={this.props.data.option2.value}
						defaultChecked={this.props.data.option2.checked}
						onChange={this.props.data.callback}
						title={this.props.data.option2.title}
					/>
					<label className={styles.optLabel}>
						{this.props.data.option2.displayName}
					</label>
				</div>
			</div>
		)
	}
}