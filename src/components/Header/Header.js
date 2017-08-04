import React, { Component } from 'react';
import { activeStyle, BurgerMenu, UL, LI, StyledNavLink } from './Header.style';

export default class Header extends Component {
	render() {
		return (
			<header>
			  <nav className="navbar">	
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <BurgerMenu className="fa fa-bars" aria-hidden="true"></BurgerMenu>
				      </button>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <UL className="nav navbar-nav">
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
				        	<StyledNavLink activeStyle={activeStyle} to='/contact'>CONTACT</StyledNavLink>
				        </LI>
				      </UL>
				    </div>
				  </div>
				</nav>
			</header>
		);
	}
}
