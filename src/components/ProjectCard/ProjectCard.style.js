import styled from 'styled-components';

const imgSize = '300px';

export const Link = styled.a`
	&, &:hover, &:active, &:focus {
		text-decoration: none;
		color: inherit;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	max-width: ${imgSize};
	transition: all 300ms ease-in-out;
	margin: 20px auto;
	cursor: pointer;
	overflow: hidden;
	
	&:hover {
		box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
		opacity: 0.8;

		> div > p {
			opacity: 1;
		}
	}
`;
	
export const FakeImg = styled.div`
	height: 0;
	width: 100%;
	display: block;
	padding: 30% 0;
	background-image: url(${props => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	z-index: 1;
`;

export const Img = styled.img`
	opacity: 0;
	filter: alpha(opacity=0);
	width: 0;
	height: 0;
`;

export const Overlay = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	color: black;
	transform: translate(-50%, -50%);
	font-size: 3em;
	opacity: 0;
	transition: all 300ms ease-in-out;
`;


export const Name = styled.h4`
	font-weight: bold;
`;

export const Brief = styled.p`
	font-size: 1.1em;
`;

export const Techno = styled.p`
	font-style: italic;
	color: rgba(0,0,0,0.5);
	height: 4rem;
`;