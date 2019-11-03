import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlitzClient } from "@glitz/core";
import transformers from "@glitz/transformers";
import { GlitzProvider } from "@glitz/react";

const glitz = new GlitzClient({ transformer: transformers() });

let settings: SettingsStorage;
type SettingsStorage = {
  swishNumber?: string;
};
export function getSettings(): SettingsStorage {
  if (settings) return settings;

  const localStorageItem = localStorage.getItem("settings");
  if (localStorageItem) {
    return (settings = JSON.parse(localStorageItem));
  }
  return {};
}

ReactDOM.render(
  <GlitzProvider glitz={glitz}>
    <App />
  </GlitzProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
