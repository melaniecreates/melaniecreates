import React from "react";
import './ContactForm.css';
import Input from 'react-toolbox/lib/input/Input';
import {Button, IconButton} from 'react-toolbox/lib/button/Button';


export default class ContactForm extends React.Component {
	  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };
	render() {
		return (
			<div className="contactForm">
				<h1>Say Hello, I would love to hear about your project.</h1>

		        <Input type='text' label='Name' name='name'  required  value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
		        <Input type='text' multiline  required  label='Tell me about your business' maxLength={20} value={this.state.multiline} onChange={this.handleChange.bind(this, 'multiline')} />
		        <Input type='email' required label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
		        <Input type='tel' required  label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
		        <Input type='text' value={this.state.hint} label='Business' hint='With Hint'  onChange={this.handleChange.bind(this, 'hint')} icon='share' />
     			<Button icon='send' label='Get In Touch' accent />
		    </div>
		);
	}
}


