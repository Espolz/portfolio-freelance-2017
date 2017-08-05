import React, { Component } from 'react';
import { StyledSection, Name, Line, HashtagList, HashtagItem, ValueProposition, CTAButton, CTADiv } from './Home.style';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
							<Link to='/contact'><CTAButton primary>J'AI BESOIN D'UN SITE WEB</CTAButton></Link>
						</Col>
						<Col xs={12} sm={4} smOffset={0}>
							<Link to='/contact'><CTAButton>JE RECHERCHE UN DÉVELOPPEUR WEB</CTAButton></Link>
						</Col>
					</CTADiv>
				</Row>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</StyledSection>	
		);
	}
}
