import React, { Component } from 'react';

import { StyledNav, activeStyle, BurgerMenu, UL, LI, StyledNavLink, Link } from './Header.style';
import forms from '../../data/forms';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapsed: true
		};
	}

	handleClick = (event) => {
		let button = document.querySelector('button');
		if (button.classList.contains('collapsed')) {
			this.setState({
				isCollapsed: true
			});
		} else {
			this.setState({
				isCollapsed: false
			});
		}
	}

	collapse = (event) => {
		this.setState({
			isCollapsed: true
		});

		let button = document.querySelector('button');
		let navbar = document.querySelector('#myNavbar');

		if (!button.classList.contains('collapsed')) {
			button.classList.add("collapsed");
		}

		if (navbar.classList.contains('in')) {
			navbar.classList.remove('in');
		}

	}


	render() {
		return (
			<header>
			  <StyledNav className="navbar navbar-fixed-top" isCollapsed={this.state.isCollapsed}>	
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button onClick={this.handleClick} type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
				      	<BurgerMenu className="fa fa-bars" aria-hidden="true"></BurgerMenu>
				      </button>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <UL onClick={this.collapse} className="nav navbar-nav">
				        <LI>
				        	<StyledNavLink exact activeStyle={activeStyle} to='/'>ACCUEIL</StyledNavLink>
				        </LI>
				        <LI>
				        	<StyledNavLink activeStyle={activeStyle} to='/about'>À PROPOS</StyledNavLink>
				        </LI>
				        <LI>
				        	<StyledNavLink activeStyle={activeStyle} to='/portfolio'>PORTFOLIO</StyledNavLink>
				        </LI>
				        <LI>
				        	<Link href={forms.contactSiteWeb} target="_blank" activeStyle={activeStyle}>CONTACT</Link>
				        </LI>
				      </UL>
				    </div>
				  </div>
				</StyledNav>
			</header>
		);
	}
}
