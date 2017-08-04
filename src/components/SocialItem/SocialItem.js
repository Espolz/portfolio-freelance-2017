import React from 'react';
import PropTypes from 'prop-types';
import { Link, Icon } from './SocialItem.style';

const SocialItem = ({name, faLogoClass, link, background}) => (
		<Link href={link} title={name} target='_blank'>
				<Icon color={background} className={'fa ' + faLogoClass} aria-hidden="true"></Icon>
		</Link>
);

SocialItem.propTypes = {
	name: PropTypes.string.isRequired,
	faLogoClass: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired
};

export default SocialItem;