import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase.config";

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
      );
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="login">
        <h3>Se connecter</h3>
        <form className="form-login" onSubmit={(e) => handleLogin(e)}>
          <input type="email" placeholder="Email" required ref={loginEmail} />
          <input
            type="password"
            placeholder="Mot de passe"
            required
            ref={loginPassword}
          />
          <input type="submit" value="Se connecter" />
          {error && (
            <p className="error-message">
              Le mail ou le mot de passe est incorrect.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
