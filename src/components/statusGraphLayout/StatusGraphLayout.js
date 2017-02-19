import React  from "react";
import './StatusGraphLayout.css';

/* AZ health board Container - pulls data from the components */
const StatusGraphLayout = React.createClass ({ 
	render () {
		return (
			<div>	
        {this.props.children}
			</div>
		)
	}
});

export default StatusGraphLayout;
