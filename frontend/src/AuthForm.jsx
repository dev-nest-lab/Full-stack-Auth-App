import React from "react";
import { useNavigate } from "react-router-dom";
import { useState} from "react";

const API_URL = "http://localhost:8004"; 

function AuthForm() {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
const registerUser = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);

    if (response.ok) {
      alert("Registration successful!");
      setIsLogin(true);
    } else {
      alert(data.message || `Error ${response.status}`);
    }

  } catch (error) {
    console.error("Network Error:", error);
    alert("Backend not running");
  }
};

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      // SET TOKEN HERE
      localStorage.setItem("token", data.access_token);
      // redirect to protected page
      navigate("/customers");
    } else {
      alert("Login failed");
    }
  };

  const [isLogin, setIsLogin] = React.useState(true);


  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? "toggle-btn active" : "toggle-btn"} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "toggle-btn active" : "toggle-btn"} onClick={() => setIsLogin(false)}>Register</button>
        </div>
        <div className="form-content">
          {isLogin ? (
            <div className="form">
              <h2>Login</h2>
              <input type="email" placeholder="Email"  value={email}onChange={(e) => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password"  value={password}onChange={(e) => setPassword(e.target.value)}  required />
              <a href="#">Forgot Password?</a>
              <button type="submit" onClick={handleLogin}>Login</button>  
              <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Register here</a></p>
            </div>
          ) : (
             <div className="form">    
              <h2>Register</h2>
              <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="submit" onClick={registerUser}>Register</button>
            </div>
          )}            
          </div>
      </div>
    </div>
  );
}

export default AuthForm;