import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReallySmoothScroll from 'really-smooth-scroll';

import { StyledGrid } from './App.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import NotFound from '../../components/NotFound/NotFound';
import About from '../../components/About/About';
import Portfolio from '../../components/Portfolio/Portfolio';
import ScrollTop from '../../components/ScrollTop/ScrollTop';


//smooth scroll
ReallySmoothScroll.shim();


class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
            <ScrollTop />
            <StyledGrid fluid>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route render={NotFound} />
              </Switch>
            </StyledGrid> 
            <Footer />
          </div>
      </Router> 
    );
  }
}


export default App;