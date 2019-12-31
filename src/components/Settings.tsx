import React, { useState } from "react";
import { RouteType } from "../App";
import { styled } from "@glitz/react";
import InputOutlined from "./InputOutlined";
import Select, { Option } from "@material/react-select";

import "@material/react-select/dist/select.css";
import Button from "./Button";

export const settingsLocalstorageKey = "settings";
export type SettingsType = {
  user: string;
  swishNumber: string;
};

export function getSettings(): SettingsType {
  const localStorageItem = localStorage.getItem(settingsLocalstorageKey);
  if (!localStorageItem) {
    return {
      swishNumber: "",
      user: ""
    };
  }

  const parsedItem = JSON.parse(localStorageItem);
  return {
    swishNumber: parsedItem.swishNumber || "",
    user: parsedItem.user || ""
  };
}

export default function Settings(props: RouteType) {
  const settings = getSettings();
  const [selectValue, setSelectValue] = useState(settings.user || "Joel");

  const [swishNumber, setSwishNumber] = useState(settings.swishNumber);

  function saveSettings() {
    const settings: SettingsType = {
      swishNumber: swishNumber,
      user: selectValue
    };
    localStorage.setItem(settingsLocalstorageKey, JSON.stringify(settings));
    props.setRoute({ route: "home", data: {} });
  }

  return (
    <styled.Div css={{ display: "flex", justifyContent: "center" }}>
      <BoxWithShadow>
        <h2>Inställningar</h2>
        <Row>
          <Select
            label="Användare"
            value={selectValue}
            onChange={evt => setSelectValue((evt.target as any).value)}
          >
            <Option value="Joel">Joel</Option>
            <Option value="Daniel">Daniel</Option>
          </Select>
        </Row>
        <Row>
          <InputOutlined
            initialValue={settings.swishNumber}
            placeholder="Swish-nummer"
            onChange={value => setSwishNumber(value)}
          />
        </Row>
        <Row>
          <Button value="Save" onClick={saveSettings} type="good" />
        </Row>
      </BoxWithShadow>
    </styled.Div>
  );
}

const BoxWithShadow = styled.div({
  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
  padding: {
    xy: 24
  },
  margin: {
    xy: 24
  }
});

const Row = styled.div({
  marginTop: 10,
  marginBottom: 10
});
