import React, { Component } from 'react';
import { ProjectGrid, Title } from './Portfolio.style.js';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import { Col } from 'react-bootstrap';

export default class Portfolio extends Component {
	render() {
		return (
			<section>
				<Title>Mes Projets</Title>
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
