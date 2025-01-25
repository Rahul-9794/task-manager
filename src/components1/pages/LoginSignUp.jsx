import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignUp = () => {
  return (
    <div className='loginsign-up'>
      <div className="loginsign-up-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name'/>
          <input type="Email" placeholder=' Your Email' />
          <input type="Pasword" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have account? <span>Login heare</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continue , Agree to the terms of use & privacy Police..</p>
        </div>
      </div>
      {/* <hr /> */}
      <br />
    </div>
  )
}
export default LoginSignUp
