import './App.css';
import ChatBox from './components/ChatBox'
import LoginForm from './components/LoginForm'
import {useState} from 'react'

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user,setUser] = useState ({email:"", password:""});
  const [error, setError] = useState ("");

  const Login = details=>{
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
    console.log("Logged in");
    setUser({
      name:details.name,
      email:details.email
    })
  }else {
    setError("Wrong email & password combination!")
  }
}


  const Logout = () => {
    setUser({name:"", email:"", password:""});
  }
  return (
    <div className="App">
      {(user.email !==  "") ? (  
        <div className="welcome text-xl pt-12 font-bold rounded-xl">
          <h2 className="welcomeback pt-4">Welcome back! <span>{user.name}</span></h2>
          <button className="logouttop rounded-xl border-b ring-2 ring-orange-400 w-24 h-12  place-items-center mt-2" onClick={Logout}>Logout</button>
           <ChatBox />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
