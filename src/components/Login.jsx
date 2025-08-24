import React, { useState } from 'react';

function Login() {
    const[username, setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username && !password){
            setMessage("Both fields are Required")
            return
        }

        if(username==="user" && password==="password"){
            setMessage("Welcome, user!")
        }else{
            setMessage("Invalid username or password")
        }

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
        <label  htmlFor="username">
            Username :
            <input type="text" value={username} 
            name="username" 
            id="username"
            onChange={(e)=> setUsername(e.target.value)}
            required
            />
        </label>
        </div>
        <div>
         <label  htmlFor="password">
            Password :
            <input type="password" value={password} 
            id="password"
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
        </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
