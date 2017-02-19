import React  from "react";

import Card from 'react-toolbox/lib/card/Card';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './../../../toolbox/theme.js';
import TopNavigation from './../../topNavigation/TopNavigation.js';
import './HomePage.css';



const HomePage = React.createClass ({ 
	render () {
	  return (

      <ThemeProvider theme={theme}>
      	<div id="home">
	      	<TopNavigation flat={true} />
			  	<section id="homePage">
		  			<div className="homebg">
			  			<div className="homebgTransLayer mainContent">
			          <section className="landing-slogan">
			          	 <img className="logo-slogan" src={require('./../../../../images/melanie-creates-branding-strategy-design.svg')} />
			          </section>
			        </div>
		        </div>
		        <section className="about-summary">
		        	<h2>User Interface Designer and Front-end Developer</h2>
		        	<p>Learn more about me</p>
		        </section>
		        <section className="latest-project">
		        	<p>Latest project</p>
		        	<h2>PayPal</h2> 
			        	<Card className="paypal-project">
				        	<h3>Designing with Google's <br /> 
											<span>Material UI</span>
									</h3> 
								  <h3>Developing with Facebook's <br /> 
											<span>React JS</span>
									</h3> 
									<p>Read more about this fun project</p>
				       </Card>

		        </section>
					</section>
					<h2>This website is developed using Facebooks React JS.</h2>
				</div>
		   </ThemeProvider>
	  );
	}
});

export default HomePage;
