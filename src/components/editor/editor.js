import React, { Component } from 'react';

import Home from '../../module/home';
import Bio from '../../module/bio';
import Footer from '../../module/footer';
import PageNotFound from '../../module/pagenotfound';
import Practice from '../../module/practice';
import Contactus from '../../module/contactus';
import Site from '../../module/site';
import PageModule from '../../module/pagemodule';

export default class Editor extends Component {
	constructor (props) {
		super(props);
		this.state = {
			content: this.props.data.content,
			page: this.props.page,
		}
	}
	render() {
		let comp;
		switch(this.props.page) {
			case 'bio': 
				comp = <Bio data={{content: this.state.content}} />
				break;
			case 'Contactus':
				comp = <Contactus />
				break;
			case 'footer':
				comp = <Footer />
				break;
			case 'home':
				comp = <Home />
				break;
			case 'pagenotfound':
				comp = <PageNotFound />
				break;
			case 'practice':
				comp = <Practice />
				break;
			case 'site':
				comp = <Site />
				break;
			default:
				comp = (<div>not found</div>)
		}
		return (
			<PageModule>
				{comp}
			</PageModule>
		)
	}
}