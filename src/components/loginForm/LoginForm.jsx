import React from 'react'
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='login-form-main-container'>
      <div className='l-f-m-c-inner'>
        <section>
          <div>LoginForm</div>
          <h3>Hello there!👋</h3>
        </section>
        <form>
          <label>Login ID</label>
          <input type='text' placeholder='Login ID' />
          <label>Password</label>
          <input type='password' placeholder='Password' />
          <a href='#'>Forgot password?</a>
          <button>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm