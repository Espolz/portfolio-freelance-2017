import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, Name, Brief, Techno, Img, FakeImg, Overlay, Link, Description } from './ProjectCard.style';


const ProjectCard = ({name, brief, techno, link, imgSrc}) => (
	<Link href={link} title={name} target='_blank'>
		<FlexContainer>
			<FakeImg src={imgSrc}>
				<Img src={imgSrc} alt={name}/>
				<Overlay id="overlay"><i className="fa fa-external-link" aria-hidden="true"></i></Overlay>
			</FakeImg>
			<Description>
				<Name>{name}</Name>
				<Brief>{brief}</Brief>
				<Techno>{techno.join(' / ')}</Techno>
			</Description>
		</FlexContainer>
	</Link>
);

ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	brief: PropTypes.string.isRequired,
	techno: PropTypes.arrayOf(PropTypes.string).isRequired,
	link: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired
};

export default ProjectCard;