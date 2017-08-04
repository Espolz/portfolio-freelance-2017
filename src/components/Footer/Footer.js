import React, { Component } from 'react';
import { Foot, Socials, LegalMentions, Rights, Email } from './Footer.style';
import { Col } from 'react-bootstrap';
import SocialItem from '../SocialItem/SocialItem';
import { socials } from '../../data/socials';

export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date().getFullYear()
		}
	}

	render() {
		return (
			<Foot>
				<Socials>
					{socials.map((social, idx) => {
						return (
							
								<SocialItem key={idx} background={social.background} name={social.name} faLogoClass={social.faLogoClass} link={social.link}/>
															);		
					})}
				</Socials>
					
				<LegalMentions>
					<Col xs={12} sm={6}>
						<Rights>&copy; Luc Le Gall {this.state.date}. Tous droits Réservés.</Rights>
					</Col>
					<Col xs={12} sm={6}>
						<Email href='mailto:llegall16@gmail.com'>llegall16@gmail.com</Email>
					</Col>
				</LegalMentions>
			</Foot>
		);
	}
}
