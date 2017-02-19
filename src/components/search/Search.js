import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import theme from './../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './Search.css';

const source = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};



class Search extends React.Component {
	state = {
    countries: ['ES-es', 'TH-th']
	}
	handleChange = (value) => {
		this.setState({countries: value});
	};

	render () {
		return (
			<ThemeProvider theme={theme}>
        <Autocomplete className="topBarSearch"
          icon="search"
          direction="down"
          label="Search for resources in any zone"
          multiple={false}
          onChange={this.handleSimpleChange}
          source={source}
          value={this.state.simple}
        />
		  </ThemeProvider>
    );
  }
}

export default Search;

