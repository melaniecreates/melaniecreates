import React  from "react";
import './InventoryTableLayout.css';

/* AZ health board Container - pulls data from the components */
const InventoryTableLayout = React.createClass ({ 
	propTypes: {
    title: React.PropTypes.string.isRequired,
  },
	render () {
		return (
			<div className="inventoryTableLayout">
				<h2>{this.props.title}</h2>
				<p>You are looking at cached data. It was synced 27 mins 23 sec ago. It will attempt to sync again in 2 mins 30 secs.</p>
        {this.props.children}
			</div>
		)
	}
});

export default InventoryTableLayout;
