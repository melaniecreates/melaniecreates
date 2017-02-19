import React from 'react';

/* Generates each AZ list item i.e CCG01, CCG02 */
class InventoryAZListItem extends React.Component {	
	propTypes: {
	  azName: React.PropTypes.string.isRequired,
  }
  render (){
    return (
    	<div className="inventoryAZListItem"><a href="">{this.props.azName}</a></div>
    )
  }
}

export default InventoryAZListItem;
