import React, { useState, useEffect } from 'react';
import { fetchUser } from './Api';

// console.log(user.id);

const ProfileDetails = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetchUser()
      .then((user) => setUser(user))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="card card-body my-3">
      <h1 className="large text-primary">{user.name}</h1>
      <ul>
        <li>Username: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default ProfileDetails;
