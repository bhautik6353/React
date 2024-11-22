import React from "react";
import { useLocation } from "react-router-dom";


export default function WelcomePage() {
  let name=useLocation()
    
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome!</h1>
        <p className="welcome-message">
          Hello,<span id="user-name">{name.state.displayname}</span> We're glad to have you here.
        </p>

        <button className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
}
