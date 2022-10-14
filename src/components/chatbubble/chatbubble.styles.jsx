import styled from "styled-components";

export const baseBubble = styled.div`
  max-width: 255px;
  word-wrap: break-word;
  margin: 1em;
  line-height: 24px;
  position: relative;
  padding: 10px 20px;
  border-radius: 25px 25px 0 25px;
  color: white;
  border: 3px solid black;

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

  &:before {
    right: -7px;
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

  &:before {
    left: -7px;
    height: 27px;
    width: 20px;
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
