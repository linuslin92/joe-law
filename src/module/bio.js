import React from 'react';
import './scss/bio.scss';
import * as form from './scss/form.module.scss';

const Bio = (props) => (
	<form className={form.container}>
		<h1 className={form.heading1}>
			{props.data.content.title}
		</h1>
		<div className={form.inner}>
			<div className={form.row}>
				<label className={form.label}>Meta</label>
				<input className={form.input} value={props.data.content.hero.high} />
			</div>
		</div>
		<div className="btnGrp" />
	</form>
);

export default Bio;