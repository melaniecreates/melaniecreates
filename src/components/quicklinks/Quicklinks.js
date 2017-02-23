import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import QuicklinksLayout from './../quicklinksLayout/QuicklinksLayout.js';
import Ripple from 'react-toolbox/lib/ripple/Ripple';

const CustomLink = (props) => (
  <a {...props} style={{position: 'relative'}}>
    {props.children}
  </a>
);
const RippleLink = Ripple({spread: 1})(CustomLink);

const Quicklinks = () => (
	<div>
		<div className="homeLink">
			<Link to="/"><img className="logo-img" src={require('./../../../images/mc-logo.png')} /></Link>
		</div>
	  <QuicklinksLayout>
	      <nav>
	        <Link activeClassName="active" className="quicklink" to="/"><div className="quicklink-wrap"><RippleLink rippleCentered={true} ><FontIcon value='face' />About</RippleLink></div></Link>
	        <Link activeClassName="active" className="quicklink" to="/portfolio"><div className="quicklink-wrap"><RippleLink rippleCentered={true}><FontIcon value='palette' />Portfolio</RippleLink></div></Link>
	        <Link activeClassName="active" className="quicklink" to="/technology"><div className="quicklink-wrap"><RippleLink rippleCentered={true}><FontIcon value='code' />Technology</RippleLink></div></Link>
	        <Link activeClassName="active" className="quicklink" to="/contact"><div className="quicklink-wrap"><RippleLink rippleCentered={true}><FontIcon value='mail' />Contact</RippleLink></div></Link>
	      </nav>
	  </QuicklinksLayout>
	</div>
);

export default Quicklinks;


