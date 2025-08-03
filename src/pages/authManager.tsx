import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthManager: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSuccess = (token: string) => {
    sessionStorage.setItem("token", token);
    window.location.href = "/inicio";
  };

  const handleRegisterSuccess = () => {
    setIsLogin(true);
  };

  return (
    <>
      {isLogin ? (
        <Login
          onSwitchToRegister={() => setIsLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <Register
          onSwitchToLogin={() => setIsLogin(true)}
          onRegisterSuccess={handleRegisterSuccess}
        />
      )}
    </>
  );
};

export default AuthManager;
