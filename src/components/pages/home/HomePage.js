import React  from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Card from 'react-toolbox/lib/card/Card';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './../../../toolbox/theme.js';
import TopNavigation from './../../topNavigation/TopNavigation.js';
import ContactForm from './../../contactForm/ContactForm.js';
import './HomePage.css';



const HomePage = React.createClass ({ 
	render () {
	  return (

      <ThemeProvider theme={theme}>
      	<div id="home">
	      	<TopNavigation flat={true} />
			  	<section id="homePage">
		  			<div className="homebg">
			  			<div className="homebgTransLayer">
			          <section className="landing-slogan">
			          	 <img className="logo-slogan" src={require('./../../../../images/melanie-creates-branding-strategy-design.svg')} />
			          </section>
			        </div>
		        </div>
		        <section className="about-summary">
		        	<h2>I'm a User Interface Designer and Front-end Developer located in San Francisco, California. I'm pasionate about great website design.</h2>
		        	<p className="siteButton"><Link className="siteButton" to="/contact">Work with me</Link></p>
		        </section>
		        <section className="latest-project">
		        	<h2><small>My last project was with</small><br />PayPal</h2> 
		        	<Card className="paypal-project" raised={false} >
		        		<ul>
		        			<li>
		        				<p>Designing with Google's</p>
		        				<h3>Material UI</h3>
		        				<img className="materialImg" src={require('./../../../../images/material-ui-logo.svg')} /> 
		        			</li>
			        		<li>
			        			<p>Developing with Facebook's</p>
		        				<h3>React JS</h3>
		        				<img className="reactImg" src={require('./../../../../images/react.svg')} /> 
		        			</li>
		        		</ul>
								<p className="readmore"><Link to="/portfolio/paypal">Read more</Link></p>
				       </Card>
		        </section>
		        <section className="currently whiteBg">
							<h2><small>I'm currently freelancing for</small><br />Grow</h2> 
							<Card className="grow-project">
			        		<p>Content strategy. User Experience. Interface Design.</p>
				        	<h3>Website Design</h3> 
								  <p>Drupal Content Management System theme</p>
									<h3>Front-end Web Development</h3> 
									<p className="readmore"><Link to="/portfolio/paypal">Read more</Link></p>
				       </Card>
		        </section>
					 <section className="technology">
							<h2><small>From</small><br />Design to development</h2> 
								<p>Learn more about how I design and what technolgies and tools I use.</p>
								<p><Link to="/technology">Read more</Link></p>
		        </section>
					</section>
					<section className="whiteBg">
						<ContactForm />
					</section>
				</div>
		   </ThemeProvider>
	  );
	}
});

export default HomePage;
