import React from "react";

function LoginStatus() {
  const isLoggedIn = true; 

  return (
    <div>
      <h2>
        {isLoggedIn ? "Welcome user" : "Please log in"}
      </h2>
    </div>
  );
}

export default LoginStatus;
