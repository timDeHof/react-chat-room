import styled from "styled-components";

export const baseBubble = styled.div`
  max-width: 255px;
  word-wrap: break-word;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px 25px 0 25px;
  color: white;
  border: 3px solid black;
  margin-bottom: 25px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    height: 30px;
  }
`;
export const sent = styled(baseBubble)`
  color: #fff;
  background: turquoise;
  align-self: flex-end;
  margin-right: 20px;

  &:before {
    right: -8px;
    width: 20px;
    height: 27px;
    background-color: turquoise;
    border-bottom-left-radius: 16px 14px;
    border-bottom: 3px solid black;
  }

  &:after {
    right: -24px;
    width: 20px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-left: 3px solid black;
  }
`;
export const received = styled(baseBubble)`
  color: #fff;
  background: lightgray;
  align-self: flex-start;
  border-radius: 25px 25px 25px 0;
  margin-left: 20px;

  &:before {
    left: -12px;
    height: 27px;
    width: 22px;
    background-color: lightgray;
    border-bottom-right-radius: 16px;
    border-bottom: 3px solid black;
  }

  &:after {
    left: -24px;
    width: 20px;
    background-color: #fff;
    border-bottom-right-radius: 10px;
    border-right: 3px solid black;
  }
`;
