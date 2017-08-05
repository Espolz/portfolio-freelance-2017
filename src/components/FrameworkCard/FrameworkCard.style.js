import styled from 'styled-components';
import { media } from '../../theme/media';


const imgSize = '150px';
const imgSizeBig = '150px';
const margin = '20px';


export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: ${imgSizeBig};
	justify-content: center;
	margin: 0 auto;

	${media.phone`
		width: ${imgSize};
	`}
`;

export const StyledImg = styled.img`
	width: 100%;
	height: ${imgSizeBig};
	margin-top: ${margin};
	margin-bottom: ${margin};

	${media.phone`
		height: ${imgSize};
	`}
`;

export const Label = styled.p`
	font-size: 2em;
	text-align: center;
	font-weight: bold;

	${media.phone`
		font-size: 1.8em;
	`}
`;