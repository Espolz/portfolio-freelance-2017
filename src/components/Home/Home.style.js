import styled from 'styled-components';
import { media } from '../../theme/media';

const primaryColor = 'palevioletred';
const normalColor = 'white';

export const Name = styled.h1`
	text-align: center;
	font-weight: bold;
	font-size: 60px;

	${media.phone`
		font-size: 40px;
	`}
`;

export const Line = styled.hr`
	border: 2px solid rgba(0,0,0,0.5);
	width: 60px;
`;

export const HashtagList = styled.ul`
	font-weight: bold;
	font-style: italic;
	list-style-type: none;
	color: rgba(0,0,0,0.6);
	text-align: center;
	padding: 0;
`;

export const HashtagItem = styled.li`
	display: inline-block;
	padding: 0 10px;
	font-size: 20px;

	&::before {
		content: '#';
	} 

	${media.phone`
		font-size: 15px;
	`}
`;

export const ValueProposition = styled.h2`
	text-align: center;
	font-weight: bold;
	margin-top: 70px;

	${media.phone`
		font-size: 1.8em;
	`}
`;


export const CTAButton = styled.button`
	text-align: center;
	background-color: ${props => props.primary ? primaryColor : normalColor};
	color: ${props => props.primary ? normalColor: primaryColor};
	border: 2px solid ${primaryColor};
	padding: 0.5em 1em;
	font-size: 1.5em;
	transition: all 200ms ease-in-out;

	&:hover {
		color: ${props => props.primary ? primaryColor : normalColor};
		border-color: ${props => props.primary ? primaryColor : normalColor};
		background: ${props => props.primary ? normalColor: primaryColor};
	}
	
	${media.phone`
		margin-top: 20px;
	`}
`;

export const CTADiv = styled.div`
	margin-top: 20px;
	text-align: center;
`;