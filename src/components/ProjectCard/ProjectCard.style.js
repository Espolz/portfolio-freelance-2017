import styled from 'styled-components';
import colors from '../../theme/colors';

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
	background-color: ${colors.lightergrey};
	border-bottom: 5px solid ${colors.yellow};

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
	color: ${colors.purple};
	transform: translate(-50%, -50%);
	font-size: 3em;
	opacity: 0;
	transition: all 200ms ease-in-out;
`;


export const Description = styled.div`
	height: 17rem;
`;


export const Name = styled.h4`
	font-weight: bold;
	font-size: 3rem;
`;

export const Brief = styled.p`
	font-size: 1.1em;
	font-family: Helvetica, Arial, sans-serif;
`;

export const Techno = styled.p`
	font-style: italic;
	color: ${colors.grey};
`;