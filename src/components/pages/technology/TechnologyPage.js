import React  from "react";
import './TechnologyPage.css'; 
import TopNavigation from './../../topNavigation/TopNavigation.js';
/* Get the data from the array and assign each a key  */
const TechnologyPage = React.createClass ({ 
	render () {
	  return (
	  	<div id="technologyPage" className="contentPadding ">
		  	<TopNavigation flat={false} />
		  	<section >
		        <div className="pageHeader mainContent">
		          <h1><small>Finding the right Technology</small><br />Technology</h1>
		          <p><em>“Design with development in mind”</em></p>
		          <h2>Design Phase</h2>
		          <h3>Wireframes, Sketches and User Experience </h3>
		          <p>After the requirements have been gathered, we work together sketching the website structure. I take these sketches and turn them into low fidelity wireframes in a prototyping software such as Balsalmiq. This prototype allows me to demonstrate what the user will experience when it comes to navigation and page layout.</p>
		           <img src={require('./../../../../images/wireframes.jpg')} />
		           <img src={require('./../../../../images/wireframes.jpg')} />
		           <h3>Realistic Mockups and Prototyping</h3>
		           <p>My preferred application for the website design is Sketch. However, when appropriate I will use photoshop and Illustrator.  I love using InVision or similar prototyping software to demonstraing the website mockups to the business. This allows gives everyone a realistic feel of how the website will look and operate.</p>
		           <img src={require('./../../../../images/sketch-icon.jpg')} />
		           <h2>Development Phase</h2>
		           <p><em>“Finding the right technology for the job”</em></p>
		           <h3>Developing the UI </h3>
		           <p>I build websites using a variety of tools and web programming languages. I use SASS/CSS3 for styles and look and feel, and HTML5  elements for page structure. In the past, I regularly used PHP server side programming language. Recently, I developed a UI for PayPal using Facebooks React Javascript framework with react toolbox for a component library. </p>
		           <img src={require('./../../../../images/sketch-icon.jpg')} />
		        </div>
			</section>
		</div>
	  );
	}
});

export default TechnologyPage;



