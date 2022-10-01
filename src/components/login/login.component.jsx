import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { LoginContainer, Buttons } from "./login.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <LoginContainer>
      <Buttons>
        <Button
          className='Buttons'
          type='button'
          buttonType={BUTTON_TYPES_CLASSES.google}
          onClick={logGoogleUser}>
          Google Sign In
        </Button>
      </Buttons>
    </LoginContainer>
  );
};

export default Login;
