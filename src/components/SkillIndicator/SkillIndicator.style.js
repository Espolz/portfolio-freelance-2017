import styled from 'styled-components';

const tagWidth = '100px';

export const Container = styled.div`
	display: flex;
	margin: 0 auto;
	width: 80%;
	line-height: 40px;
	border-radius: 10px;
	overflow: hidden;
`;

export const SkillTag = styled.div`
	width: ${tagWidth};
	text-align: center;
	background-color: ${props => props.color};
	box-shadow: inset 0px 0px 400px 110px rgba(0, 0, 0, 0.15);
	color: white;
	font-weight: bold;
`;
 
export const ProgressBar = styled.div`
	display: flex;
	width: calc(100% - ${tagWidth});
	background-color: rgba(0,0,0,0.1);
	position: relative;
`;

export const Progress = styled.div`
	width: ${props => props.percentage}%;
	background-color: ${props => props.color};
`;

export const PercentageIndicator = styled.div`
	position: absolute;
	right: 0px;

	&::after {
		content: '%';
		margin-right: 2px;
	}
`;
