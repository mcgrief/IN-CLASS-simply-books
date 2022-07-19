import React from 'react';
import { useAuth } from '../utils/context/authContext';
import UserData from '../components/User';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <UserData
        image={user.image}
        name={user.name}
        email={user.email}
        lastLogin={user.lastLogin}
      />
      <button type="button" onClick={signOut}>Sign Out</button>
    </>
  );
}
