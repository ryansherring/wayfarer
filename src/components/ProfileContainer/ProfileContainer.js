import React from 'react';
import Profile from '../../components/Profile/Profile';
import ProfileEditForm from '../../components/ProfileEditForm/ProfileEditForm';
import Post from '../../components/PostContainer/Post/Post';
import './ProfileContainer.css';

import { Grid, Button } from 'semantic-ui-react';
import axios from 'axios';
/* post seed dummy data */
import postSeed from "../../components/PostContainer/postSeed.json";

class ProfileContainer extends React.Component {
	state = {
		profile: {},
		showEditForm: false,
		posts: [],
	};

	componentDidMount() {
		const userId = localStorage.getItem('uid');

		axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, { withCredentials: true })
			.then(res => {
				console.log(res);
				this.setState({
					profile: res.data.data,
					posts: postSeed
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

	displayPosts = posts => {
		return posts.map(post => {
			return <Post key={Math.random() * 10000} post={post} />;
		});
	};

	render() {
		return (
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
						<section className="post-container">
							<h2 style={{ textAlign: 'center' }}>{this.state.profile.name}'s Posts</h2>
							<div className="post-scroll">
								{this.state.posts.length ? (
									this.displayPosts(this.state.posts)
								) : (
										<h1>No Posts Yet!</h1>
									)}
							</div>
						</section>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

export default ProfileContainer;