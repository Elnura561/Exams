import './App.css'

import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleRegister = (name, email, password) => {
    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Тіркелу сәтті өтті!");
  };

  const handleLogin = (email, password) => {
    const foundUser = users.find((user) => user.email === email && user.password === password);
    if (foundUser) {
      setCurrentUser(foundUser);
    } else {
      alert("Қате email немесе пароль");
    }
  };

  const handleGuestLogin = () => {
    setIsGuest(true);
    setCurrentUser({ name: "Guest" });
    
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsGuest(false);
  };

  const handleDeleteAccount = () => {
    const updatedUsers = users.filter((user) => user.email !== currentUser.email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setCurrentUser(null);
  };

  return (
    <div>
      {!currentUser ? (
        <div>
          <h1>Login</h1>
          <button onClick={handleGuestLogin}>LOgin</button>
        </div>
      ) : (
        <div>
          <h1>Register</h1>
          <p>Қош келдіңіз, {currentUser.name}!</p>
          {!isGuest && <button onClick={handleDeleteAccount}>Аккаунтты жою</button>}
          <button onClick={handleLogout}>Register</button>
        </div>
      )}
    </div>
  );}
export default App
