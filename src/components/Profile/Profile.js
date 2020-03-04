import React from 'react';

const Profile = (props) => {

  return (
    <div>
      <h1>{props.profile.name && props.profile.name.split(' ')[0]}'s Profile</h1>
      <p><strong>Email:</strong> {props.profile.email}</p>
    </div>
  )
};

export default Profile;