import React from "react";
import Alternatives from "./Alternatives";
import { styled } from "@glitz/react";
import { UnitType, IngredientType, DrinkType } from "../data";
import Button from "./Button";
import { RouteState } from "../App";

type PropType = {
  isRecipe: boolean;
  cart: {
    ingredient: IngredientType;
    amount: number;
    cost: number;
    unit: UnitType;
  }[];
  showInstructions: boolean;
  setShowInstructions: (value: boolean) => void;
  checkoutDrink: DrinkType;
  setCheckoutDrink: (value: DrinkType) => void;
  setRoute: (route: RouteState) => void;
};

export default function CheckoutIngredients(props: PropType) {
  const {
    cart,
    showInstructions,
    setShowInstructions,
    checkoutDrink,
    setCheckoutDrink,
    isRecipe
  } = props;
  return (
    <IngredientsContainer>
      <h2>Ingredienser</h2>
      {cart.map((lineItem, lineItemIndex) => {
        const ingredient = lineItem.ingredient;

        return (
          <div>
            <styled.Div
              css={{
                display: "flex",
                marginTop: 20,
                fontSize: 20,
                marginBottom: 10
              }}
            >
              <styled.Div
                css={{
                  flexBasis: 35,
                  flexShrink: 0,
                  flexGrow: 0
                }}
              >
                {lineItem.amount}
              </styled.Div>
              <styled.Div css={{ flexBasis: 60, flexShrink: 0, flexGrow: 0 }}>
                {lineItem.unit}
              </styled.Div>
              <div>{ingredient.name}</div>
              <styled.Span
                css={{
                  flex: { grow: 1 },
                  textAlign: "right",
                  fontWeight: "bold"
                }}
              >
                {Math.round(lineItem.cost * 100) / 100}kr
              </styled.Span>
            </styled.Div>
            {!isRecipe && !showInstructions && (
              <Alternatives
                ingredient={ingredient}
                lineItem={lineItem}
                lineItemIndex={lineItemIndex}
                checkoutDrink={checkoutDrink}
                setCheckoutDrink={newState => setCheckoutDrink(newState)}
              />
            )}
          </div>
        );
      })}
      {!isRecipe && checkoutDrink.instructions && !showInstructions && (
        <Button
          onClick={() => setShowInstructions(true)}
          value="Visa instruktioner"
          type="good"
          css={{
            marginTop: 30
          }}
        />
      )}
      {(showInstructions || isRecipe) && (
        <>
          <h2>Instruktioner</h2>
          <ol>
            {checkoutDrink.instructions &&
              checkoutDrink.instructions.map(s => <li>{s}</li>)}
          </ol>
          {!isRecipe && (
            <Button
              onClick={() => setShowInstructions(false)}
              value="Visa alternativ"
              type="good"
              css={{
                marginTop: 30
              }}
            />
          )}
          {isRecipe && (
            <Button
              onClick={() => props.setRoute({ route: "drinksList", data: {} })}
              value="Färdigblandat!"
              type="good"
              css={{
                marginTop: 30
              }}
            />
          )}
        </>
      )}
    </IngredientsContainer>
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

const IngredientsContainer = styled(BoxWithShadow, {
  width: 400
});
