import styled from 'styled-components';
import { media } from '../../theme/media';
import colors from '../../theme/colors';


const primaryColor = colors.pink;
const normalColor = colors.white;
const hoverColor = colors.yellow;
const htOpacity = 0.8;


export const StyledSection = styled.section`
	padding: 10rem 2rem 0;
`;

export const Name = styled.h1`
	text-align: center;
	margin: 0 auto;
	max-width: 70rem;
	font-weight: bold;
	font-size: 12rem;
	padding: 3rem 0;

	span {
		font-size: 15rem;
	}
	
	${media.phone`
		font-size: 4.5rem;
		max-width: 50rem;

		span {
			font-size: 7.5rem;
		}
	`}
`;

export const Line = styled.hr`
	border: 2px solid ${colors.grey};
	width: 60px;
	opacity: ${htOpacity};
`;

export const HashtagList = styled.ul`
	font-weight: bold;
	font-style: italic;
	list-style-type: none;
	color: ${colors.grey};
	text-align: center;
	padding: 0;
	opacity: ${htOpacity};
`;

export const HashtagItem = styled.li`
	display: inline-block;
	padding: 0 10px;
	font-size: 2rem;

	&::before {
		content: '#';
	} 

	${media.phone`
		font-size: 1.5rem;
	`}
`;

export const ValueProposition = styled.h2`
	text-align: center;
	font-weight: bold;
	margin-top: 70px;
	color: ${colors.lighterpurple};
	font-size: 4.5rem;


	${media.phone`
		font-size: 3.5rem;
	`}
`;


export const CTAButton = styled.button`
	text-align: center;
	background-color: ${props => props.primary ? primaryColor : normalColor};
	color: ${props => props.primary ? normalColor: primaryColor};
	border: 4px solid ${primaryColor};
	padding: 0.5em 1em;
	font-size: 1.5em;
	transition: all 100ms ease-in-out;

	&:hover {
		color: ${primaryColor};
		border-color: ${primaryColor};
		background: ${hoverColor};
	}
	
	${media.phone`
		margin-top: 20px;
	`}
`;

export const CTADiv = styled.div`
	padding-top: 4rem;
	text-align: center;
`;