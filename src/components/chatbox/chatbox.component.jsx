import React from "react";
import { ChatboxContainer } from "./chatbox.styles";
import Message from "../message/message.component";
import { messages } from "../../messages.js";
const Chatbox = () => {
  return (
    <ChatboxContainer>
      {messages.map((item) => {
        const { id, user, timestamp, message } = item;
        return (
          <Message
            key={id}
            user={user}
            message={message}
            timestamp={timestamp}
          />
        );
      })}
    </ChatboxContainer>
  );
};

export default Chatbox;
