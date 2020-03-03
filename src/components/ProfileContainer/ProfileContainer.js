import React from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends React.Component {
	state = {
		profile: {},
		showEditForm: false
	};

	componentDidMount() {

	}

	render() {
		return(
			<Profile
				profile={this.state.profile}
			/>
		)
	}
}

export default ProfileContainer;