import React from 'react';

/* Container for all the inventory content */
class InventoryLayout extends React.Component {
  render (){
    return (
    	<div className="inventoryLayout">
    		{this.props.children}
    	</div>
    )
  }
}

export default InventoryLayout;
