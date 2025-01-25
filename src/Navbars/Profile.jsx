import React from "react";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="data:image/webp;base64,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"
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">John Doe</h2>
        <p className="profile-details">Web Developer at ABC Company</p>
        <p className="profile-details">Location: Mumbai, India</p>
        <button className="profile-button">Edit Profile</button>
      </div>
    </div>
  );
}
export default Profile;
