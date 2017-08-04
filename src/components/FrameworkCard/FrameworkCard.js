import React from 'react';
import PropTypes from 'prop-types';
import { StyledImg, Label, FlexContainer } from './FrameworkCard.style'; 

const FrameworkCard = ({name, imgSrc}) => {
	return (
		<FlexContainer>
			<StyledImg src={imgSrc} alt={name} />
			<Label>{name}</Label>
		</FlexContainer>
	);
}

FrameworkCard.propTypes = {
	name: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired
};

FrameworkCard.defaultProps = {
	name: ''
};

export default FrameworkCard