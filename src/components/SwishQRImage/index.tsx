import React, { useEffect, useState } from "react";
import { styled } from "@glitz/react";

type PropType = {
  value: number;
  text: string;
};

export default (props: PropType) => {
  const [imageData, setImageData] = useState();

  return (
    <styled.Div css={{ paddingBottom: "100%", position: "relative" }}>
      <styled.Img
        css={{ width: "100%", position: "absolute" }}
        src={
          "http://localhost:3001?amount=" + props.value + "&text=" + props.text
        }
      />
    </styled.Div>
  );
};
