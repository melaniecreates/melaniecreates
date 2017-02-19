import React from "react";
import './AboutPage.css';
import TopNavigation from './../../topNavigation/TopNavigation.js';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div>
		      	<TopNavigation flat={false} />
				<section className="aboutPage">
					<div className="pageHeader mainContent">
						<h1>About me</h1>
						<p>Melanie Graham is a Graphic Designer and Front-end Web Developer living and working in San Francisco, California. She specializes in User Interface and Experience (UI/UX) Design. Her aim is to understand a company's aspirations, strengths, and weaknesses. Identify direction, find visual solutions and create beautiful responsive websites.</p>
						<p>Design is not just what it looks and feels like. Design is how it works.</p>
					</div>
				</section>
			</div>
		);
	}
}

