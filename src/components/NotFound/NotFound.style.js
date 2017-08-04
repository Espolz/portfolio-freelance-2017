import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InformationsDiv = styled.div`
	text-align: center;
`;

export const H3 = styled.h3`
	margin-bottom: 20px;
`;

export const RedirectionLink = styled(Link)`
	background-color: palevioletred;
	color: white;
	text-decoration: none;
	width: 8em;
	text-align: center;
	border-radius: 3px;
	text-decoration: none;
	padding: 0.5em 2em;
	
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