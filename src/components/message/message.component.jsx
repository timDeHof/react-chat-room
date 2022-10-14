import React from "react";
import Bubble, {
  BUBBLE_TYPES_CLASSES,
} from "../chatbubble/chatbubble.component";
import { MessageItem, UserName } from "./message.styles";
const Message = ({ user, message, timestamp }) => {
  return (
    <Bubble
      bubbleType={
        user === "Tim"
          ? BUBBLE_TYPES_CLASSES.sent
          : BUBBLE_TYPES_CLASSES.received
      }>
      <UserName>{user}</UserName>
      <MessageItem>{message}</MessageItem>
      <MessageItem>{timestamp}</MessageItem>
    </Bubble>
  );
};

export default Message;
