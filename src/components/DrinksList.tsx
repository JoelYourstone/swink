import React, { useState, useEffect, useRef } from "react";
import { RouteType } from "../App";
import { styled } from "@glitz/react";
import drinks, { DrinkType } from "../data";
import InputOutlined from "./InputOutlined";

export default (props: RouteType) => {
  console.log("render");

  const inputRef = useRef<any>();

  useEffect(() => {
    console.log(inputRef.current);
    (inputRef.current as HTMLInputElement).focus();
  }, []);

  const [filter, setFilter] = useState("");
  let filteredDrinks = drinks;
  if (filter) {
    filteredDrinks = drinks.filter(drink => {
      if (drink.name.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
      let matchIngredient = drink.ingredientLineItems.find(ingredient => {
        if (ingredient.name.toLowerCase().includes(filter.toLowerCase())) {
          return true;
        }
      });
      return !!matchIngredient;
    });
  }

  return (
    <Container>
      <Header>
        <InputOutlined
          placeholder="Filtrera på drink/ingrediens"
          onChange={phrase => setFilter(phrase)}
          elementRef={el => (inputRef.current = el)}
        />
      </Header>
      <ListContainer>
        {filteredDrinks.map(drink => {
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
    <DrinkContainer onClick={() => props.onCheckout(props.drink)}>
      <styled.Div
        css={{ height: 150, display: "flex", justifyContent: "center" }}
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

const Header = styled.div({
  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)",
  height: 60
});

const DrinkContainer = styled.div({
  cursor: "pointer",
  flexBasis: 150,
  flexGrow: 0,
  margin: {
    x: 5,
    y: 10
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
