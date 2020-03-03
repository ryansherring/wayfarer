import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

class ProfileEditForm extends React.Component {
	state = {
		name: '',
		homeCity: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();

		console.log(this.state);

	} 

	render() {
		return(
			<>
			<p>I am Profile Edit Form</p>
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label>Name</label>
					<input 
						placeholder="Edit Name" 
						name="name"
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label>Home City</label>
					<input 
						placeholder="Edit Home City" 
						name="homeCity"
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
			</>
		)
	}
}

export default ProfileEditForm;