import React from "react";
import DialogUserLogin from 'react-toolbox/lib/dialog/Dialog';
import {Button} from 'react-toolbox/lib/button/Button';

class AccountLogin extends React.Component {
	state = {
    active: false
  };
  handleToggle = () => {
    this.setState({active: !this.state.active});
  }
  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Login", onClick: this.handleToggle }
  ];
  render () {
    return (
    	<div>
			  <Button icon="account_circle"  onClick={this.handleToggle} />
	    	<DialogUserLogin actions={this.actions} active={this.state.active} onEscKeyDown={this.handleToggle} onOverlayClick={this.handleToggle} title='Paypal C3 Login'>
	      	<p>Login Content Goes Here</p>
	    	</DialogUserLogin>
			</div>
    );
  }
}
export default AccountLogin;