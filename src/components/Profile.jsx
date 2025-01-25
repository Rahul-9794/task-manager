import React from 'react';

function Profile() {
  const handleLogout = () => {
    alert('Logged out!');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: rahulmadd0303@gmail.com</p>
      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;