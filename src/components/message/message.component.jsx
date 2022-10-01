import React from "react";
import { MessageContainer } from "./message.styles";
const Message = ({ user, message, timestamp }) => {
  return (
    <MessageContainer>
      <p>
        {user}
        {timestamp}
      </p>
      <p>{message}</p>
    </MessageContainer>
  );
};

export default Message;
