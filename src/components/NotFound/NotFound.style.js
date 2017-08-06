import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../theme/colors';
import { media } from '../../theme/media';

export const InformationsDiv = styled.div`
	text-align: center;
	margin-top: 20rem;
`;

export const H3 = styled.h3`
	margin-bottom: 4rem;
	font-size: 4rem;

	${media.phone`
		font-size: 2.5rem;
	`}
`;

export const RedirectionLink = styled(Link)`
	background-color: ${colors.pink};
	color: ${colors.white};
	text-decoration: none;
	width: 8em;
	text-align: center;
	text-decoration: none;
	padding: 0.5em 2em;
	font-size: 4rem;

	${media.phone`
		font-size: 3rem;
	`}

	&::after {
		content: '>';
		position: relative;
		left: 0.5em;
		top: 0;
	}

	&:hover {
		text-decoration: none;
		color: white
	}
`;