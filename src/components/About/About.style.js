import styled from 'styled-components';
import colors from '../../theme/colors';
import { media } from '../../theme/media';

const titleToContentGap = '5rem';

export const Presentation = styled.p`
	text-align: justify;
	line-height: 4rem;
	font-size: 2.8rem;
	width: 70%;
	margin: ${titleToContentGap} auto 0;
	font-family: Helvetica, Arial, sans-serif;
	
	${media.phone`
		font-size: 2rem;
		line-height: 3rem;
		text-align: left;
		width: 80%;
	`}

	a, a:hover, a:active, a:focus {
		color: ${colors.lighterpurple};
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

`;

export const Article = styled.article`
	margin-bottom: ${titleToContentGap};

	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const Skills = styled.div`
	> div {
		margin-bottom: 20px;

		&::last-of-type {
			margin-bottom: 0;
		}
	}
`;

export const SubTitle = styled.h4`
	text-align: center;
	margin: 0 auto;
	font-weight: bold;
	font-size: 5rem;
	margin-top: ${titleToContentGap};
	margin-bottom: ${titleToContentGap};

	${media.phone`
		font-size: 3rem;
	`}
`;


export const Categorie = styled(Article)`
`;