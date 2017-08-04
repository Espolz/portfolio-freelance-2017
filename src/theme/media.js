import { css } from 'styled-components';

const sizes = {
	phone: { max: 767 },
	tablet: { min: 768, max: 991 },
	desktop: { min: 992, max: 1199 },
	giant: { min: 1200 }
};


export const media = Object.entries(sizes).reduce((finalMedia, size) => {
	return {
		...finalMedia,
		[size[0]]: function(...args) {
			let keys = Object.keys(size[1]);
			let values = Object.values(size[1]);
			return css`
				@media (${keys[0]}-width: ${values[0]}px) ${keys.length > 1 && `and (${keys[1]}-width: ${values[1]}px)`} {
					${css(...args)}	
				}
			`;
		}
	};
}, {});