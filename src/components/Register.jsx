import React from 'react';

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registered successfully!');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email"  /><br /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password"  /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;