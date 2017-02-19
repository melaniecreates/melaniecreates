import React from 'react';
import Drawer from 'react-toolbox/lib/drawer';
import theme from './SideDrawer.scss';

class SideDrawer extends React.Component {
  state = {
    active: false
  };
  handleToggle = () => {
    this.setState({active: !this.state.active});
  };
  render (){
    return (
      <sideDrawer className="quicklinks">
        <button onClick={this.handleToggle}><IconMenu /></button>
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <h5>This is your Drawer.</h5>
          <p>You can embed any content you want, for example a Menu.</p>
        </Drawer>
      </sideDrawer>
    )
  }
}
// Material Icons - called by the googleapi stylesheet in index.html
const IconMenu = () => (
  <i className="material-icons">menu</i>
)


export default SideDrawer;

