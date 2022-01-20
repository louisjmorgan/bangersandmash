/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import Home from './Components/Home';
import Music from './Components/Music';
import Activities from './Components/Activities';
import Decor from './Components/Decor';
import Food from './Components/Food';
import Tickets from './Components/Tickets';
import Info from './Components/Info';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './ScrollToTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = ({ location }) => {
  console.log(location);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/decor-installations">
            <Decor />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/(|activities|decor-installations|food|music|info)">
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
