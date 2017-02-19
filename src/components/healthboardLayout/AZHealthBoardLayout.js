import React  from "react";
import './AZHealthBoardLayout.css';

/* AZ health board Container - pulls data from the components */
const AZHealthBoardLayout = React.createClass ({ 
	render () {
		return (
			<div className="az-boards">	
        {this.props.children}
			</div>
		)
	}
});

export default AZHealthBoardLayout;
