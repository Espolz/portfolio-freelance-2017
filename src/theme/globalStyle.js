import styled, { injectGlobal } from 'styled-components';
import colors from './colors';
import { media } from './media'; 

// eslint-disable-next-line
injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Oswald');
	
	html, body {
		width: 100%;
		margin: 0px;
		padding: 0px;
		overflow-x: hidden;
		color: ${colors.purple};
		background-color: ${colors.white};
		font-family: 'Oswald', sans-serif;
	}

	p {
		font-family: Cardo, serif;
	}
`;

export const Title = styled.h3`
	text-align: center;
	font-weight: bold;
	font-size: 8rem;
	background-color: ${colors.purple};
	color: ${colors.yellow};
	line-height: 20rem;
	margin-top: 0;
	border-top: 4px solid ${colors.yellow};
	
	${media.phone`
		font-size: 4rem;
		line-height: 10rem;
	`}
`;
