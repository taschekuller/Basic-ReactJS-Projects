import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="">
      <form onSubmit={submitHandler} className="h-screen login pt-64">
        {/* USERNAME */}
        <div className="w-96 h-96 border-2 grid place-items-center rounded-xl mx-auto loginframe">
          <div className="text-md text-gray-600">
            Please enter your username, e-mail and password!
          </div>
          <div class="md:flex md:items-center border-b-2 rounded-md mb-6 mt-6">
            <div class="md:w-1/3">
              <input
                className="bg-transparent"
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
                placeholder="Type username.."
              ></input>
            </div>
          </div>
          {/* E-MAIL */}
          <div class="md:flex md:items-center mb-6 border-b-2 rounded-md">
            <div class="md:w-1/3">
              <input
                className="bg-transparent"
                type="email"
                name="email"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                placeholder="Type e-mail.."
              />
            </div>
          </div>
          {/* PASSWORD */}
          <div class="md:flex md:items-center mb-6 border-b-2 rounded-md">
            <div class="md:w-1/3">
              <input
                className="bg-transparent"
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                placeholder="Type password.."
              />
            </div>
          </div>
          <div class="md:flex md:items-center grid place-items-center rounded-full w-28 h-12 border-2 pl-7 pb-1 loginsubmit">
            
            <div class="md:w-1/3">
              <input type="submit" value="LOGIN" className="loginbutton"/>
            </div>
            
          </div>
          <div className="text-md text-gray-600">
            <a href="/" className="">I Forgot my password</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
