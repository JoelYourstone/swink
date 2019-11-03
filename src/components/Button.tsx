import React from "react";
import { styled, StyledProps } from "@glitz/react";
import { colors } from "../Checkout";
import { JSXElement } from "@babel/types";

type PropType = StyledProps & {
  onClick: () => any;
  value: string;
  type?: "good" | "bad";
};

export default styled((props: PropType) => {
  const primary = props.type === "good" ? colors.green : colors.red;
  const primaryLight =
    props.type === "good" ? colors.lighterGreen : colors.lighterRed;
  return (
    <styled.Button
      css={props.compose({
        border: {
          xy: {
            color: props.type && primary
          }
        },
        height: 60,
        color: props.type && primary,
        ":hover": {
          backgroundColor: props.type && primaryLight
        }
      })}
      className="mdc-button mdc-button--outlined"
      onClick={() => props.onClick()}
    >
      {props.value}
    </styled.Button>
  );
});
