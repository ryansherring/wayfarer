import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
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

		const userId = localStorage.getItem('uid');

		axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, this.state, {withCredentials: true })
			.then(res => {
				console.log(res);
				this.props.toggleEditForm();
				this.props.setProfileInfo(res.data.data);
			})
			.catch(err => {
				console.log(err.response);
			});
	}

	render() {
		return(
			<>
			<Container style={{ marginTop: '10px'}}>
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label style={{ color: 'white' }}>Name</label>
					<input 
						placeholder="Edit Name" 
						name="name"
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Form.Field>
					<label style={{ color: 'white' }}>Home City</label>
					<input 
						placeholder="Edit Home City" 
						name="homeCity"
						onChange={this.handleChange}
					/>
				</Form.Field>
				<Button type="submit">Submit</Button>
			</Form>
			</Container>
			</>
		)
	}
}

export default ProfileEditForm;