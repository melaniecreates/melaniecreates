import React  from "react";
import './TechnologyPage.css'; 
import TopNavigation from './../../topNavigation/TopNavigation.js';
/* Get the data from the array and assign each a key  */
const TechnologyPage = React.createClass ({ 
	render () {
	  return (
	  	<div>
		  	<TopNavigation flat={false} />
		  	<section>
		        <div className="pageHeader mainContent">
		          <h1>Technology</h1>
		        </div>
			</section>
		</div>
	  );
	}
});

export default TechnologyPage;



