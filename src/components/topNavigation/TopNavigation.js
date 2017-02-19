import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import theme from './../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './TopNavigation.css';

/* This is the website's top App bar navigation that contains the logo to the left and login icons etc to the right */

class TopNavigation extends React.Component {
	propTypes: {
	  flat: React.PropTypes.boolean.isRequired,
  }
  render () {
    return (
			<ThemeProvider theme={theme}>
				<AppBar className="topNav" flat={this.props.flat} rightIcon='menu' fixed={true} >
				</AppBar>
		  </ThemeProvider>
    );
  }
}

export default TopNavigation;



