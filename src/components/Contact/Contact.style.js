import styled, { keyframes } from 'styled-components';

export const sendAnimSpeed = 1500;

const sendBtnSize = '60px';
const mailWidth = '600px';
const mailHeight = '400px';
const containerHeight = '600px';



const launchAnim = keyframes`
	0% {
		opacity: 1;
		transform: translateY(0) scale(1);
	} 
	10%, 15% {
		transform: translateY(20px);
	}
	40%, 70% {
		transform: translateY(-600px) scale(1);
	}
	70% {
		opacity: 1;
	}
	71% {
		opacity: 0;
		transform: translateY(-600px) scale(0.6);
	}
	72% {
		opacity: 0;
		transform: translateY(0px) scale(0.6);
	}
	100% {
		opacity: 1;
		transform: translateY(0px) scale(1);
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	overflow: hidden;
	width: 100%;
	height: ${containerHeight};
	justify-content: center;
	align-items: center;
`;

export const Mail = styled.div`
	position: relative;
	display: flex;
	height: ${mailHeight};
	width: ${mailWidth};
	background: lightblue;
	box-shadow: 0 20px 10px -5px rgba(0,0,0,0.2);
	padding: 5px;
	color: lightblue;
	${props => props.send && `animation: ${launchAnim} ${sendAnimSpeed}ms ease-in-out;`}
`;

export const Header = styled.div`
	width: 100%;
	height: 100px;
	background-color: white;
	text-align: center;
`;

export const HeaderText = styled.h3`
`;


export const Form = styled.div`
`;

export const Send = styled.div`
	position: absolute;
	text-align: center;
	bottom: 10px;
	right: 10px;
	border-radius: 50%;
	width: ${sendBtnSize};
	line-height: ${sendBtnSize};
	background-color: white;
	transition: transform 300ms ease-in-out;
	box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
	cursor: pointer;

	&:hover {
		transform: scale(1.1, 1.1);
	}
`;