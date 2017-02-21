import React from 'react';
import theme from './../../toolbox/theme.js';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './Footer.css';

class Footer extends React.Component {
  render (){
    return (
    	<ThemeProvider theme={theme}>
	      <footer className="">
	      	<section className="footerWrap">
		        <img className="footerLogo" src={require('./../../../images/melanie-creates-logo-gray.png')} />
			    <p>San Francisco Bay Area, Redwood City, CA 94065<br /><a href="mailto:melaniejanegraham@gmail.com">melaniejanegraham@gmail.com</a></p>
			    <p>Site made with <span>&hearts;</span>. &copy; 2017 by Melanie Graham </p>
			</section>
	      </footer>
      </ThemeProvider>
    )
  }
}

export default Footer;

