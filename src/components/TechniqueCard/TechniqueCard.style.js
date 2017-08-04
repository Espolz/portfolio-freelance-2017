import styled from 'styled-components';

const imgWidth = '500px';
const imgHeight = '200px';

export const Container = styled.div`
	position: relative;
	margin: 0;
	padding: 0;
	width: 100%;
	height: ${imgHeight};
	overflow: hidden;
`;

export const StyledImg = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 100%;
	min-height: 100%;
	width: ${imgWidth};
	height: auto;
	z-index: 1;
`;

export const Overlay = styled.div`
	margin: 0;
	z-index: 2;
	position: absolute;
	background: rgba(0, 0, 0, 0.35);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;


export const Label = styled.p`
	margin: 0;
	color: white;
	font-size: 1.5em;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 5px solid white;
	text-align: center;
	padding: 0.5em;
	box-shadow: 2px 5px 5px -2px rgba(0, 0, 0, 0.5);
	text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
`;	


