import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { InformationsDiv, RedirectionLink, H3 } from './NotFound.style';

export default function() {
		return (
			<section style={{ padding: '1rem' }}>
				<Row>
					<Col xs={12}>
						<InformationsDiv>
							<H3>Désolé, la page que vous recherchez n'a pas été trouvée.</H3>
							<RedirectionLink to='/'>Accueil</RedirectionLink>
						</InformationsDiv>
					</Col>
				</Row>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</section>
		);
}
