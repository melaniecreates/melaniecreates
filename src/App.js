import React, { Component } from 'react';
import './Global.css';
import Quicklinks from './components/quicklinks/Quicklinks.js';
import Footer from './components/footer/Footer.js';
import AboutPage from './components/pages/about/AboutPage.js'; 
import HomePage from './components/pages/home/HomePage.js'; 

import GrowPage from './components/pages/portfolio/grow/GrowPage.js'; 
import AfPage from './components/pages/portfolio/af/AfPage.js'; 
import EcoPage from './components/pages/portfolio/eco/EcoPage.js'; 
import PaypalPage from './components/pages/portfolio/paypal/PaypalPage.js'; 
import ShekoohPage from './components/pages/portfolio/shekooh/ShekoohPage.js'; 
import SoulPage from './components/pages/portfolio/soul/SoulPage.js'; 

import PortfolioPage from './components/pages/portfolio/PortfolioPage.js'; 
import TechnologyPage from './components/pages/technology/TechnologyPage.js'; 
import ContactPage from './components/pages/contact/ContactPage.js'; 
import MainContentLayout from './components/pages/MainContentLayout.js'; 
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

/* React Routers single page application */
const NotFound = () => (<MainContentLayout><h1>404.. This page is not found!</h1></MainContentLayout>)
/* This 'Page' component is called below in the '<Router ... ><Route path=... component={Page}>... and inserts the correct page content */
const Page = (props) => (
  <div>
    <Quicklinks />
    <MainContentLayout>
      {props.children}
    </MainContentLayout>
  </div>
)
const RouterPathAndPageContent = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Page}>
      <IndexRoute component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/portfolio' component={PortfolioPage} />
      <Route path='portfolio/grow' component={GrowPage} />
      <Route path='portfolio/paypal' component={PaypalPage} />
      <Route path='portfolio/eco' component={EcoPage} />
      <Route path='portfolio/af' component={AfPage} />
      <Route path='portfolio/shekooh' component={ShekoohPage} />
      <Route path='portfolio/soul' component={SoulPage} />
      <Route path='/technology' component={TechnologyPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
) /* EndOf Routers single page application components */


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <RouterPathAndPageContent />
        <Footer />
      </div>
    );
  }
}

export default App;
