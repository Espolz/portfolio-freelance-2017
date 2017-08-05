import React, { Component } from 'react';
import { ProjectGrid } from './Portfolio.style.js';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { Col } from 'react-bootstrap';
import { Title } from '../../theme/globalStyle';


export default class Portfolio extends Component {
	render() {
		return (
			<section>
				<Title>MES PROJETS</Title>
				<ProjectGrid>
					{
						projects.map((project, idx) => (
							<Col key={idx} xs={12} sm={4}>
								<ProjectCard
									name={project.name}
									brief={project.brief}
									techno={project.techno}
									link={project.link}
									imgSrc={project.imgSrc}
								/>
							</Col>
						))
					}
				</ProjectGrid>
			</section>
		);
	}
}
