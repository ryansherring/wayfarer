import React from 'react';
import Profile from '../../components/Profile/Profile';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';
import axios from 'axios';

class ProfileContainer extends React.Component {
	state = {
		profile: {},
		showEditForm: false
	};

	componentDidMount() {

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
			<>
				<Profile
					profile={this.state.profile}
				/>
				{!this.state.showEditForm && <button onClick={this.toggleEditForm}>Edit</button>}
				{this.state.showEditForm && <ProfileEditForm/>}
			</>
		)
	}
}

export default ProfileContainer;