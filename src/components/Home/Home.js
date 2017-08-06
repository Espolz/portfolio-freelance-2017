import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { StyledSection, Name, Line, HashtagList, HashtagItem, ValueProposition, CTAButton, CTADiv } from './Home.style';
import forms from '../../data/forms';

export default class Home extends Component {
	render() {
		return (
			<StyledSection>
				<Name><span>{'{'}</span> LUC LE GALL <span>{'}'}</span></Name>
				<Line />
				<HashtagList>
					<HashtagItem>DÉVELOPPEUR WEB</HashtagItem>
					<HashtagItem>FREELANCE</HashtagItem>
					<HashtagItem>REACTJS</HashtagItem>
				</HashtagList>
				<Row>
					<Col xs={12}>
						<ValueProposition>
							VOUS RECHERCHEZ UNE SOLUTION WEB SUR MESURE ?
						</ValueProposition>
					</Col>
				</Row>
				<Row>
					<CTADiv>
						<Col xs={12} sm={4} smOffset={2}>
							<a href={forms.contactSiteWeb} target="_blank" rel="noopener noreferrer"><CTAButton primary>J'AI BESOIN D'UN SITE WEB</CTAButton></a>
						</Col>
						<Col xs={12} sm={4} smOffset={0}>
							<a href={forms.contactDevWeb} target="_blank" rel="noopener noreferrer"><CTAButton>JE RECHERCHE UN DÉVELOPPEUR WEB</CTAButton></a>
						</Col>
					</CTADiv>
				</Row>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</StyledSection>	
		);
	}
}
