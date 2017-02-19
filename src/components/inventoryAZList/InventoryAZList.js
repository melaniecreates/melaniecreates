import React from 'react';
import './InventoryAZList.css';

/* This is the container for the all the AZ's listed i.e. <div class="inventoryAZList"> CCG01, ..., ..., ... </div>  */
class InventoryAZList extends React.Component {	

  render (){
    return (
    	<div className="inventoryAZList">{this.props.children}</div>
    )
  }
}

export default InventoryAZList;
