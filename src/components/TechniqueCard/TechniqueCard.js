import React from 'react';
import PropTypes from 'prop-types';
import { Container, StyledImg, Label, Overlay } from './TechniqueCard.style';

const TechniqueCard = ({name, imgSrc}) => {
	return (
		<Container>
			<StyledImg src={imgSrc} alt={name}/>
			<Overlay>
				<Label>{name}</Label>
			</Overlay>
		</Container>
	);
};

TechniqueCard.propTypes = {
	name: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired
};

TechniqueCard.defaultProps = {
	name: ''
};

export default TechniqueCard;