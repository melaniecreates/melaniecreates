import React from "react";
import Input from 'react-toolbox/lib/input/Input';
import DialogAppDropdown from 'react-toolbox/lib/dialog/Dialog';

class AppDropMenu extends React.Component {
  render () {
    return (
    	<div>
				<DialogAppDropdown actions={this.actions} active={this.state.active} onEscKeyDown={this.handleToggle} onOverlayClick={this.handleToggle} title='Paypal C3 Login'>
        	<p>Login Content Goes Here</p>
      	</DialogAppDropdown>
	      <section>
	        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16 } />
	        <Input type='text' label='Disabled field' disabled />
	        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
	        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
	        <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon={<span>J</span>} />
	      </section> 
	    </div>
    );
  } 
}
export default AppDropMenu;