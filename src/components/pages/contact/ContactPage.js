import React from "react";
import TopNavigation from './../../topNavigation/TopNavigation.js';
import ContactForm from './../../contactForm/ContactForm.js';

export default class ContactPage extends React.Component {
	render() {
		return (
			<div>
				<TopNavigation flat={false} />
				<section className="contactPage">
				  <div className="pageHeader mainContent">
			        <h1>Contact</h1>
			        <ContactForm />
			      </div>
			    </section>
		    </div>
		);
	}
}


