import React from "react";
import { RouteType } from "../App";
import { styled } from "@glitz/react";
import drinks, { DrinkType } from "../data";

export default (props: RouteType) => {
  return (
    <Container>
      <ListContainer>
        {drinks.map(drink => {
          return (
            <Drink
              key={drink.name}
              drink={drink}
              onCheckout={drink =>
                props.setRoute({ route: "checkout", data: drink })
              }
            />
          );
        })}
      </ListContainer>
    </Container>
  );
};

type DrinkProps = {
  onCheckout: (drink: DrinkType) => void;
  drink: DrinkType;
};

const Drink = (props: DrinkProps) => {
  return (
    <DrinkContainer
      // onTouchStart={() => props.onCheckout(props.drink)}
      onClick={() => props.onCheckout(props.drink)}
    >
      <styled.Div
        css={{ height: 250, display: "flex", justifyContent: "center" }}
      >
        <styled.Img
          css={{ maxHeight: "100%", maxWidth: "100%" }}
          src={props.drink.image}
        />
      </styled.Div>
      <styled.H3 css={{ margin: { y: 0 } }}>{props.drink.name}</styled.H3>
      <styled.Div css={{ fontSize: 14 }}>
        {props.drink.ingredientLineItems.map(s => s.name).join(", ")}
      </styled.Div>
    </DrinkContainer>
  );
};

const Container = styled.div({});

const DrinkContainer = styled.div({
  cursor: "pointer",
  flexBasis: 250,
  flexGrow: 0,
  margin: {
    x: 10,
    y: 20
  },
  padding: {
    xy: 10
  },
  ":hover": {
    boxShadow: "0 2px 16px 0 #e7e7e7"
  }
});

const ListContainer = styled.div({
  display: "flex",
  flexWrap: "wrap"
});
