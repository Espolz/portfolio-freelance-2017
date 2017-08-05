import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { media } from '../../theme/media';
import colors from '../../theme/colors';


const paddingMentions = 20;

export const Foot = styled.footer`
	background-color: ${colors.purple};
`;

export const Socials = styled.div`
	padding: 20px;
	text-align: center;
	background-color: ${colors.lighterpurple};

	> a {
		margin: 0 20px;
		
		${media.phone`
			margin: 0 5px;	
		`}
	} 
`;

export const LegalMentions = styled(Row)`
	text-align: center;
	color: ${colors.white};
	padding-top: ${paddingMentions}px;
	padding-bottom: ${paddingMentions}px;
`;

export const Rights = styled.p`
	margin: 0;
	font-family: Helvetica, Arial, sans-serif;
`;

export const Email = styled.a`
	&, &:hover, &:active, &:focus {
		color: ${colors.yellow};
		text-decoration: none;
	}
`;