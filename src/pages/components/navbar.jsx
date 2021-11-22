import React from 'react';
import '../styles/navbar.css'

function App() {
  return (
    <div className="navigation-bar">
      <h1 className="logo-settingsegoeui-bold-white-33px">
        Logo Here
      </h1>
      <div className="overlap-group">
        <HomeButton3>Home</HomeButton3>
        <LoginButton2>About</LoginButton2>
      </div>
      <SignUpButton3
        signUpButton="button-component-2.png"
        signUp="Sign Up"
      />
      <LoginButton2 className="login-button">
        Login
      </LoginButton2>
    </div>
  );
}

export default App;

function HomeButton3(props) {
  const { children } = props;

  return (
    <div className="home-button">
      <div className="placesegoeui-bold-white-29px">
        {children}
      </div>
    </div>
  );
}


function LoginButton2(props) {
  const { children, className } = props;

  return (
    <div className={`about-button ${className || ""}`}>
      <div className="aboutsegoeui-bold-white-29px">
        {children}
      </div>
    </div>
  );
}


function SignUpButton3(props) {
  const { signUpButton, signUp } = props;

  return (
    <div
      className="sign-up-button"
      style={{ backgroundImage: `url(${signUpButton})` }}
    >
      <div className="sign-upsegoeui-bold-white-29px">
        {signUp}
      </div>
    </div>
  );
}
