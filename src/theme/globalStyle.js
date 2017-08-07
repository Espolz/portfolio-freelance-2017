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
	text-align: left;
	padding-left: 3rem;
	font-weight: bold;
	font-size: 8rem;
	background-color: ${colors.white};
	color: ${colors.purple};
	line-height: 20rem;
	margin-top: 0;
	box-shadow: 0px 0px 50px rgba(0,0,0,0.2);


	${media.phone`
		font-size: 4rem;
		padding-left: 2rem;
		line-height: 10rem;
	`}
`;
