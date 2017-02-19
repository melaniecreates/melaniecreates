import React, { Component } from 'react';
import HealthPage from './../pages/health/HealthPage.js'; 
import StatusPage from './../pages/status/StatusPage.js'; 
import InventoryPage from './../pages/inventory/InventoryPage.js'; 
import DeployPage from './../pages/deploy/DeployPage.js'; 
import MonitoringPage from './../pages/monitoring/MonitoringPage.js'; 
import MainContentLayout from './../pages/MainContentLayout.js'; 
import Quicklinks from './../quicklinks/Quicklinks.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

/* React Routers single page application components */
const NotFound = () => (<div><h1>404.. This page is not found!</h1></div>)
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
      <Route path='/health' component={HealthPage} />
      <Route path='/status' component={StatusPage} />
      <Route path='/inventory' component={InventoryPage} />
      <Route path='/deploy' component={DeployPage} />
      <Route path='/Monitoring' component={MonitoringPage} />
    </Route>
  </Router>
)
/* EndOf Routers single page application components */