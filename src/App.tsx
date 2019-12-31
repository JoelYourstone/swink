import React, { useState } from "react";
import Home from "./components/Home";
import DrinksList from "./components/DrinksList";
import Checkout from "./Checkout";
import Settings from "./components/Settings";
export type RouteType = {
  setRoute: (route: RouteState) => void;
  currentRoute: RouteState;
};

export type RouteState = {
  route: string;
  data: any;
};

const App: React.FC = () => {
  const [route, setRoute] = useState<RouteState>({ route: "home", data: {} });

  switch (route.route) {
    case "home":
      return <Home setRoute={setRoute} currentRoute={route} />;
    case "drinksList":
      return <DrinksList setRoute={setRoute} currentRoute={route} />;
    case "checkout":
      return <Checkout setRoute={setRoute} currentRoute={route} />;
    case "settings":
      return <Settings setRoute={setRoute} currentRoute={route} />;
    default:
      return <h1>404</h1>;
  }
};

export default App;
