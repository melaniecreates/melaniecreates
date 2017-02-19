/* This page in the container for the AZ's generated cloud information. Generally, this is displayed to the right of the AZ list. */

import React from 'react';
import Tab from 'react-toolbox/lib/tabs/Tab.js';
import Tabs from 'react-toolbox/lib/tabs/Tabs'; 
import InventoryTableLayout from './../inventoryTableLayout/InventoryTableLayout.js'; 
import InventoryTable from './../inventoryTable/InventoryTable.js';
import InventoryMoreMenu from './../inventoryMoreMenu/InventoryMoreMenu.js';  
import theme from './../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './InventoryAZInformation.css';

class InventoryAZInformation extends React.Component {
	state = {
    index: 0
  };

  handleTabChange = (index) => {
    this.setState({index});
  };


  handleActive = () => {
    console.log('Special one activated');
  };
	render () {
	  return (
	  	<section className="inventoryAZInformation">
	  		<ThemeProvider theme={theme}>
		  		<div>
		  			<InventoryMoreMenu />
			    	<Tabs className="inventorySubMenu" index={this.state.index} onChange={this.handleTabChange}>
			  			<Tab label="Instances" onActive={this.handleActive}>
			  				<InventoryTableLayout title="Instances">
						  		<InventoryTable />
						    </InventoryTableLayout>
			  			</Tab>
			  			<Tab label="Computes">
			  				<InventoryTableLayout title="Computes" >
						  		<InventoryTable />
						    </InventoryTableLayout>
			  			</Tab>
			  			<Tab label="More">
			  				fdgdf
			  			</Tab>
			  		</Tabs>
			  	</div>
		  	</ThemeProvider>
			</section>
	  );
	}
}

export default InventoryAZInformation;


  

