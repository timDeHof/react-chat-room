import React from "react";
import { FormGroup, Input } from "./mesageInput.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
const MessageInput = () => {
  return (
    <FormGroup>
      <Input type='text' name='messageInput' placeholder='enter message here' />
      <Button
        style={{ borderRadius: "0 25px 25px 0" }}
        buttonType={BUTTON_TYPES_CLASSES.base}
        type='submit'>
        Send
      </Button>
    </FormGroup>
  );
};

export default MessageInput;
