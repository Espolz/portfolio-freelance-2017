import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { media } from '../../theme/media';

export const BurgerMenu = styled.i`
	font-size: 20px;
`;

export const UL = styled.ul`
	text-align: center;
	float: none;
`;

export const LI = styled.li`
	display: inline-block !important;
	float: none !important;

	${media.phone`
		display: inline !important;
	`}
`;

export const StyledNavLink = styled(NavLink)`
	color: lightblue;
`;

export const activeStyle = {
	fontWeight: 'bold',
	color: 'palevioletred'
};

