import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class ScrollTop extends Component {
	static propTypes = {
	    match: PropTypes.object.isRequired,
	    location: PropTypes.object.isRequired,
	    history: PropTypes.object.isRequired
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}
  
	onRouteChanged() {
		window.scrollTo(0,0);	
	}

	render() {
		return (
			<div></div>
		);
	}
}



export default withRouter(ScrollTop);