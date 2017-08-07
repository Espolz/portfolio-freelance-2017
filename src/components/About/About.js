import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Title } from '../../theme/globalStyle';
import { Presentation, Article, Skills, SubTitle, Categorie} from './About.style';
import { languages, frameworks, techniques } from '../../data/skills';
import SkillIndicator from '../SkillIndicator/SkillIndicator';
import FrameworkCard from '../FrameworkCard/FrameworkCard';
import TechniqueCard from '../TechniqueCard/TechniqueCard';

export default class About extends Component {
	render() {
		return (
			<section>
				<Article>
						<Title>QUI SUIS-JE ?</Title>
						<Presentation>
							Je suis développeur web front-end en indépendant.
							 Passionné par le développement et la création, 
							 j'ai récemment obtenu la certification front-end du
							 <span> <a href='https://www.freecodecamp.com/about/' target='_blank' rel="noopener noreferrer">freeCodeCamp</a></span>
							 . Je continue désormais mon apprentissage du Web côté serveur
							 avec Node.js et MongoDB.
						</Presentation>
				</Article>
				<Article>

						<Title>MES COMPÉTENCES</Title>

						<Categorie>
							<SubTitle>LANGAGES</SubTitle>
							<Skills>
							{languages.map((skill, idx) => {
								return (
									<SkillIndicator key={idx} color={skill.color} faLogoClass={skill.faLogoClass} levelPercentage={skill.levelPercentage}>
										{skill.name}
									</SkillIndicator>
								);
							})}
							</Skills>
						</Categorie>

						<Categorie>
							<SubTitle>FRAMEWORKS</SubTitle>
							<Row style={{ marginTop: '40px'}}>
								{frameworks.map((framework, idx) => {
									return (
										<Col key={idx} xs={12} sm={4}>
											<FrameworkCard name={framework.name} imgSrc={framework.imgSrc}/>	
										</Col>
									);
								})}
							</Row>
						</Categorie>

						<Categorie>
							<SubTitle>TECHNIQUES</SubTitle>
								{techniques.map((technique, idx) => {
									return (
										<TechniqueCard key={idx} name={technique.name} imgSrc={technique.imgSrc}/>	
									);
								})}
						</Categorie>
				</Article>
			</section>
		);
	}
}
