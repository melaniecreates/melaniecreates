/* The page generates the cards, which contains the card details and its C3chart */

import React from "react";
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle.js';
import { theme } from './../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './StatusGraphCard.css';
import C3Chart from 'react-c3js';
import 'c3/c3.min.css';

const data = {
  columns: [
    ['data1', 100, 100, 10, 100, 100, 100]
  ],
};

const StatusGraph = React.createClass ({ 
  render () {
    return (
      <div>
      	<C3Chart data={data} />
      </div>
    );
  }
});

const StatusGraphCard = React.createClass ({ 
	propTypes: {
	  azName: React.PropTypes.string.isRequired,
  },
  getInitialState: function() {
		return {
			kpi: 99
		}
	},
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Card className="graphCard">
        	<CardTitle className="azName" title={this.props.azName} />
        	<CardTitle className="kpi" title={this.state.kpi +'%'} subtitle="Last 24 hrs (KPI)">
        		<label>Key Performance Indicator</label>
        	</CardTitle>
          <StatusGraph />
        </Card>
      </ThemeProvider>
    );
  }
});

export default StatusGraphCard;

