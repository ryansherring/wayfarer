import React from 'react';

const Profile = (props) => {
	const date = Date(props.profile.createdAt);
  return (
    <div>
      <h1>{props.profile.name && props.profile.name.split(' ')[0]}'s Profile</h1>
      <p><strong>Email:</strong> {props.profile.email}</p>
      <p><strong>Home City:</strong> {props.profile.homeCity}</p>
      <p><strong>Join Date:</strong> {date}</p>
    </div>
  )
};

export default Profile;