import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../theme/media';
import colors from '../../theme/colors';


export const StyledNav = styled.nav`
	background-color: ${colors.purple};
	border: none;
	
	${media.phone`
		background-color: ${colors.transparent};

		.navbar-header {
			background-color: ${props => props.isCollapsed ? colors.transparent : colors.white};
			color: black;
			transition: all 100ms ease-in-out;
		}

		.navbar-collapse {
			background-color: ${colors.purple};
		}
	`}
`;

export const BurgerMenu = styled.i`
	font-size: 20px;
	background-color: ${colors.transparent};
`;

export const UL = styled.ul`
	text-align: center;
	float: none;
`;

export const LI = styled.li`
	display: inline-block !important;
	float: none !important;
	font-size: 2.5rem;
	padding: 2rem 0;

	${media.phone`
		font-size: 2rem;
		padding: 0;
		display: inline !important;
	`}
`;

export const StyledNavLink = styled(NavLink)`
	&, &:hover, &:active, &:focus {
		color: ${colors.yellow};
		text-decoration: none;
		background-color: inherit !important;
	}

	transition: all 200ms ease-in-out;

	&#contact {
		border: 3px solid ${colors.yellow};

		&:hover {
			border-color: ${colors.pink};
			background-color: ${colors.yellow} !important;
		}
	}

	&:hover {
		color: ${colors.pink};
	}

	${media.phone`
		&#contact {
			width: 10rem;
			margin: 1rem auto;
		}
	`}
`;

export const activeStyle = {
	color: colors.pink
};

