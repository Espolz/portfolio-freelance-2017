import React, { Component } from 'react';
import { Name, Line, HashtagList, HashtagItem, ValueProposition, CTAButton, CTADiv } from './Home.style';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Name>LUC LE GALL</Name>
				<Line />
				<HashtagList>
					<HashtagItem>DÉVELOPPEUR WEB</HashtagItem>
					<HashtagItem>FREELANCE</HashtagItem>
					<HashtagItem>REACTJS</HashtagItem>
				</HashtagList>
				<Row>
					<Col xs={12}>
						<ValueProposition>
							Vous rechechez une solution web sur mesure ?
						</ValueProposition>
					</Col>
				</Row>
				<Row>
					<CTADiv>
						<Col xs={12} sm={4} smOffset={2}>
							<Link to='/contact'><CTAButton primary>J'ai besoin d'un site web</CTAButton></Link>
						</Col>
						<Col xs={12} sm={4} smOffset={0}>
							<Link to='/contact'><CTAButton>Je recherche un développeur web</CTAButton></Link>
						</Col>
					</CTADiv>
				</Row>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</section>	
		);
	}
}
