import React, { useRef } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import "./signupscreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [sign, SetsignUp] = useState({
    signMethod: "Sign In",
    status: true,
  });

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupscreen">
      <form>
        <h1>{sign.signMethod}</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />

        {sign.status ? (
          <button type="submit" onClick={signIn}>
            {sign.signMethod}
          </button>
        ) : (
          <button type="submit" onClick={register}>
            {sign.signMethod}
          </button>
        )}

        <h4>
          <span className="signupScreen__grey">New to Netflix? </span>
          <span
            className="signupScreen__link"
            onClick={() => {
              SetsignUp({
                signMethod: "Sign Up",
                status: false,
              });
            }}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
