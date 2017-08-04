import styled from 'styled-components';

const titleToContentGap = '40px';
const subTitleRadius = '10px';


export const Title = styled.h3`
	text-align: center;
	font-weight: bold;
	font-size: 2.75em;
`;

export const Presentation = styled.p`
	text-align: justify;
	line-height: 1.5em;
	font-size: 1.7em;
	width: 80%;
	margin: ${titleToContentGap} auto 0;
`;

export const Article = styled.article`
	margin-bottom: 100px;

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
	width: 8em;
	margin: 0 auto;
	font-style: italic;
	font-size: 2.5em;
	margin-top: ${titleToContentGap};
	margin-bottom: ${titleToContentGap};
	/*border 4px solid #333333;
	border-bottom-right-radius: ${subTitleRadius};
	border-bottom-left-radius: ${subTitleRadius};*/
`;


export const Categorie = styled(Article)`
`;