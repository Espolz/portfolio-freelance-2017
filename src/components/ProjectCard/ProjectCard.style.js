import styled from 'styled-components';
import colors from '../../theme/colors';

const imgWidth= '350px';
const imgHeight = '200px';


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
	max-width: ${imgWidth};
	transition: all 300ms ease-in-out;
	margin: 20px auto;
	cursor: pointer;
	overflow: hidden;
	background-color: ${colors.lightergrey};
	border-bottom: 6px solid ${colors.yellow};


	&:hover {
		box-shadow: 0px 0px 30px rgba(0,0,0,0.3);
		opacity: 0.8;

		#overlay {
			opacity: 1;
		}
	}
`;
	
export const FakeImg = styled.div`
	max-height: ${imgHeight};
	width: 100%;
	display: block;
	background-image: url(${props => props.src});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	z-index: 1;
`;

export const ImgContainer = styled.div`
	height: ${imgHeight};
	width: 100%;
	overflow: hidden;
	display: block;
	position: relative;
	z-index: 1;
`;

export const Img = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 100%;
	min-height: 100%;
	width: ${imgWidth};
	height: auto;
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
	height: 19rem;
	padding: 0 5px;
`;


export const Name = styled.h4`
	font-weight: bold;
	font-size: 2rem;
	padding-top: 1rem;
	line-height: 3rem;
`;

export const Brief = styled.p`
	font-size: 1.1em;
	font-family: Helvetica, Arial, sans-serif;
`;

export const Techno = styled.p`
	font-style: italic;
	color: ${colors.grey};
	padding: 0 5px;	
`;