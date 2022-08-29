import React from 'react'

export default function Login() {
  return (
    
      <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Log In</h3>
                    
                        <div class="form-group">
                            <input type="text" required class="form-control" placeholder="Your Email or Nickname *" />
                        </div>
                        <div class="form-group mt-1">
                            <input type="password" required class="form-control" placeholder="Your Password *" />
                        </div>
                        <div class="form-group mt-2">
                            <input type="submit" required class="btnSubmit btn btn-success" value="Login" />
                        </div>
                        <div class="form-group mt-2">
                            <a href="https://wannart.com/" class="btnForgetPwd">Forget Password?</a>
                        </div>
                    
                </div>
                <div class="col-md-6 login-form-2">
                    <div class="login-logo">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    </div>
                    <h3>Sign Up</h3>
                        <div class="form-group">
                            <input type="text" required class="form-control" placeholder="Your Email *" />
                        </div>
                        <div class="form-group mt-1">
                            <input type="text" required class="form-control" placeholder="Your Nickname *" />
                        </div>
                        <div class="form-group mt-1">
                            <input type="password" required class="form-control" placeholder="Your Password *" />
                        </div>
                        <div class="form-group mt-1">
                            <input type="password" required class="form-control" placeholder="Again Your Password *" />
                        </div>
                        <div class="form-group mt-2">
                            <input type="submit" class="btnSubmit btn btn-success" value="Sign Up" />
                        </div>
                        
                    </div>
                </div>

      </div>
    
    
  )
}
