import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { media } from '../../theme/media';

const paddingMentions = 20;

export const Foot = styled.footer`
	background-color: #333333;
`;

export const Socials = styled.div`
	padding: 20px;
	text-align: center;
	background-color: #424242;

	> a {
		margin: 0 20px;
		
		${media.phone`
			margin: 0 5px;	
		`}
	} 
`;

export const LegalMentions = styled(Row)`
	text-align: center;
	color: white;
	padding-top: ${paddingMentions}px;
	padding-bottom: ${paddingMentions}px;
`;

export const Rights = styled.p`
	margin: 0;
`;

export const Email = styled.a`
`;