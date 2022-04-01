import React from "react";
import { useState } from "react";
import "./loginscreen.css";
import SignUpScreen from "./SignUPScreen";
// import SignInScreen from "./SignUPScreen";

function LoginScreen() {
  const [signin, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="loginscreen__button"
        >
          Sign In
        </button>
        <div className="loginscreen__grediant" />
      </div>
      <div className="loginscreen__body">
        {signin ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films ,TV programmes and more.</h1>
            <h2>Watch anywhere , Cancel at any time.</h2>
            <h3>
              Ready to watch Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="loginscreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
