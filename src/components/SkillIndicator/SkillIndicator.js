import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, SkillTag, ProgressBar, Progress, PercentageIndicator } from './SkillIndicator.style';

export default class SkillIndicator extends Component {
	render() {
		return (
			<Container>
				<SkillTag color={this.props.color}>
					<p style={{margin: 0}}><i className={'fa ' + this.props.faLogoClass} aria-hidden="true"></i> {this.props.children}</p>
				</SkillTag>
				<ProgressBar>
					<Progress percentage={this.props.levelPercentage} color={this.props.color}></Progress>
					<PercentageIndicator>{this.props.levelPercentage}</PercentageIndicator>
				</ProgressBar>
			</Container>
		);
	}
}


SkillIndicator.propTypes = {
	color: PropTypes.string.isRequired,
	levelPercentage: PropTypes.number.isRequired,
	faLogoClass: PropTypes.string.isRequired
};

SkillIndicator.defaultProps = {
	color: 'red',
	levelPercentage: 0,
	faLogoClass: 'fa-html5'
};