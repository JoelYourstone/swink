import React from "react";
import { styled } from "@glitz/react";
import { RouteType } from "../App";

export default (props: RouteType) => {
  return (
    <Base>
      <Selection
        onClick={() => props.setRoute({ route: "drinksList", data: {} })}
      >
        Jag vill ha en drink!
      </Selection>
      <Selection>Jag vill kolla på senaste ordrar</Selection>
      <Selection>Jag vill ??</Selection>
    </Base>
  );
};

const Selection = styled.div({
  padding: {
    y: 50
  },
  backgroundColor: "#ccc",
  flex: {
    grow: 1,
    basis: "100%"
  },
  display: "flex",
  justifyContent: "center",
  margin: {
    y: 5
  }
});

const Base = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  marginTop: 100,
  maxWidth: 600,
  margin: {
    x: "auto"
  }
});
