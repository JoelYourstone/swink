import React, { useEffect, useRef } from "react";
import { styled } from "@glitz/react";
import { RouteType } from "../App";
import { getSettings, SettingsType } from "./Settings";

export default (props: RouteType) => {
  const settings = getSettings();

  useEffect(() => {
    const settings = getSettings();
    if (!settings.swishNumber || !settings.user) {
      props.setRoute({ route: "settings", data: {} });
    }
  }, []);

  return (
    <Base>
      <Selection
        onClick={() => props.setRoute({ route: "drinksList", data: {} })}
      >
        Jag vill ha en drink!
      </Selection>
      <Selection
        onClick={() => props.setRoute({ route: "settings", data: {} })}
      >
        Användare: {settings.user}, byt användare!
      </Selection>
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
