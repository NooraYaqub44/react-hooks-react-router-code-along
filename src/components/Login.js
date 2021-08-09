import React from 'react'

function Login() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="username"/>
            <label htmlFor="username">User name</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
  
  
  
  

export default Login
