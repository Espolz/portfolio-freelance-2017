import React, { Component } from 'react';
import { FlexContainer, Mail, Header, HeaderText, Form, Send, sendAnimSpeed} from './Contact.style';


export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSend: false
		};
	}

	sendMail = (event) => {
		this.setState({
			isSend: true
		});
		this.timeout = window.setTimeout(function(){
			this.setState({
				isSend: false
			});
		}.bind(this), sendAnimSpeed);
	}

	render() {
		return (
			<section>
				<FlexContainer>
					<Mail send={this.state.isSend}>
						<Header>
							<HeaderText>CONTACTEZ-MOI !</HeaderText>
						</Header>
						<Form>
						</Form>	
						<Send onClick={this.sendMail}>Envoyer</Send>
					</Mail>
				</FlexContainer>
				<br/><br/><br/>
			</section>
		);
	}
}
