import styled from 'styled-components';

const fontColor = 'white';

export const Link = styled.a`
	&, &:hover, &:active, &:focus {
		color: ${fontColor};
		text-decoration: none;
	}
`;

export const Icon = styled.i`
	text-align: center;
	font-size: 5rem;
	transition: all 300ms ease-in-out;

	&:hover {
		transform: translateY(-10%) scale(1.2);
		text-shadow: 0px 5px 5px rgba(0,0,0,0.1);
		color: ${props => props.color};
	}
`;