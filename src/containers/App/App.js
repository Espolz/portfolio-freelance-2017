import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../components/Home/Home';
import NotFound from '../../components/NotFound/NotFound';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Portfolio from '../../components/Portfolio/Portfolio';

export default class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />
            <Grid fluid style={{ padding: 0 }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
                <Route render={NotFound} />
              </Switch>
            </Grid>
            <Footer />
          </div>
      </Router> 
    );
  }
}