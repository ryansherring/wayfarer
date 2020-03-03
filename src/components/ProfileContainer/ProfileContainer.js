import React from 'react';
import Profile from '../../components/Profile/Profile';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';

import { Grid, Button } from 'semantic-ui-react';
import axios from 'axios';

class ProfileContainer extends React.Component {
	state = {
		profile: {},
		showEditForm: false
	};

	componentDidMount() {
		const userId = localStorage.getItem('uid');

		axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, { withCredentials: true })
			.then(res => {
				console.log(res);
				this.setState({
					profile: res.data.data
				})
			})
			.catch(err => {
				console.log(err.response);
			})
	}

	setProfileInfo = user => {
		this.setState({
			profile: user
		});
	}

	toggleEditForm = () => {
		this.setState(prevState => {
			return {
				showEditForm: !prevState.showEditForm
			}
		})
	}

	render() {
		return(
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
						<Profile
							profile={this.state.profile}
						/>
						{!this.state.showEditForm && <Button onClick={this.toggleEditForm}>Edit</Button>}
						{this.state.showEditForm && <ProfileEditForm toggleEditForm={this.toggleEditForm} setProfileInfo={this.setProfileInfo} />}
					</Grid.Column>
					<Grid.Column width={12}>
						{/* HERE IS WHERE PROFILE POSTS WOULD BE?????? */}
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default ProfileContainer;