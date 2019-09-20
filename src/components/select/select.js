import React, { Component } from 'react';

import * as styles from './select.module.scss';
export default class Select extends Component {
	render() {
		return (
			<div className={styles.moduleSelector}>
				<label className={styles.selectorLabel}>
					{this.props.data.label}
				</label>
				<select 
					onChange={this.props.events.onChange}
					className={styles.moduleSelect}
				>
					{
						this.props.data.options.map((child, i) => {
							return ( 
								<option 
									key={`child_${i}`}
									value={child.value}
								>
									{child.label}
								</option>
							)
						})
					}
				</select>
			</div>
		)
	}
}