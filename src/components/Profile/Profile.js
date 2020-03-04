import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Profile = (props) => {
  const date = Date(props.profile.createdAt);
  return (
    <Segment inverted>
      <h1>{props.profile.name && props.profile.name.split(' ')[0]}'s Profile</h1>
      <p><strong>Email:</strong></p>
      <p>{props.profile.email}</p>
      <p><strong>Home City:</strong></p>
      <p>{props.profile.homeCity}</p>
      <p><strong>Join Date:</strong></p>
      <p>{date}</p>
    </Segment>
  )
};

export default Profile;