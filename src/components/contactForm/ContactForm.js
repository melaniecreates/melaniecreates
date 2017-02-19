import React from "react";
import './ContactForm.css';
import Input from 'react-toolbox/lib/input/Input';


export default class ContactForm extends React.Component {
	  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };
	render() {
		return (
			<div className="contactForm">
				<h1>Say Hello, I would love to hear about your project.</h1>

		        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
		        <Input type='text' hint='With Hint, no label' name='name' value={this.state.label} onChange={this.handleChange.bind(this, 'label')} maxLength={16} />
		        <Input type='text' label='Disabled field' disabled />
		        <Input type='text' multiline label='Multiline' maxLength={20} value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline')} />
		        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
		        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
		        <Input type='text' value={this.state.hint} label='Required Field' hint='With Hint' required onChange={this.handleChange.bind(this, 'hint')} icon='share' />
		        <Input type='text' label='error' error={<span>Error!! <a href="#!" onClick={e => { e.preventDefault(); console.log('some help'); }}>?</a></span>} />
     
		    </div>
		);
	}
}


