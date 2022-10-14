import { sent, received } from "./chatbubble.styles";

export const BUBBLE_TYPES_CLASSES = {
  sent: "sent",
  received: "received",
};

const getBubble = (bubbleType = BUBBLE_TYPES_CLASSES.base) =>
  ({
    [BUBBLE_TYPES_CLASSES.sent]: sent,
    [BUBBLE_TYPES_CLASSES.received]: received,
  }[bubbleType]);

const Bubble = ({ children, bubbleType, ...otherProps }) => {
  const CustomBubble = getBubble(bubbleType);
  return <CustomBubble {...otherProps}>{children} </CustomBubble>;
};

export default Bubble;
