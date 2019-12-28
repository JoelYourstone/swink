import React, { useState, useRef } from "react";
import { RouteType } from "./App";
import { DrinkType, ingredientsList, IngredientType, UnitType } from "./data";
import SwishQRImage from "./components/SwishQRImage";
import { styled } from "@glitz/react";
import Button from "./components/Button";
import CheckoutIngredients from "./components/CheckoutIngredients";

export const colors = {
  green: "#5e9f1a !important",
  lightGreen: "rgb(94, 159, 26, 0.5) !important",
  lighterGreen: "rgb(94,159, 26, 0.2) !important",
  red: "rgb(198,0,0) !important",
  lighterRed: "rgb(198,0,0, 0.2) !important"
};

export default (props: RouteType) => {
  const [checkoutDrink, setCheckoutDrink] = useState<DrinkType>(
    props.currentRoute.data
  );
  const [showInstructions, setShowInstructions] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const orderNumber = useRef(uuidv4().substring(0, 8));

  const cart = calculateTotals(checkoutDrink);
  const totalCost =
    Math.round(
      cart.reduce((value, ingredient) => (value += ingredient.cost), 0) * 100
    ) / 100;

  if (showRecipe) {
    return (
      <styled.Div css={{ display: "flex", justifyContent: "center" }}>
        <CheckoutIngredients
          setRoute={props.setRoute}
          isRecipe
          cart={cart}
          showInstructions={showInstructions}
          setCheckoutDrink={setCheckoutDrink}
          setShowInstructions={setShowInstructions}
          checkoutDrink={checkoutDrink}
        />
      </styled.Div>
    );
  }

  if (orderConfirmed) {
    return (
      <styled.Div
        css={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          alignItems: "flex-start"
        }}
      >
        <BoxWithShadow css={{ width: 600 }}>
          <SwishQRImage
            text={checkoutDrink.name + ", " + orderNumber.current}
            value={totalCost}
          />

          <styled.Div css={{ display: "flex", justifyContent: "center" }}>
            <Button
              value="Jag har betalt!"
              onClick={() => {
                saveOrder(checkoutDrink, cart, totalCost, orderNumber.current);
                setShowRecipe(true);
              }}
              css={{ marginRight: 10 }}
              type="good"
            />
            <Button
              value="Avbryt :("
              type="bad"
              onClick={() => setOrderConfirmed(false)}
            />
          </styled.Div>
        </BoxWithShadow>
      </styled.Div>
    );
  }

  return (
    <styled.Div
      css={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        alignItems: "flex-start"
      }}
    >
      <styled.Div css={{ width: 400 }}>
        <DrinkImageContainer>
          <styled.H2 css={{ marginBottom: 24 }}>{checkoutDrink.name}</styled.H2>
          <styled.Div css={{ textAlign: "center" }}>
            <styled.Img
              css={{ maxWidth: "100%", maxHeight: 450 }}
              src={checkoutDrink.image}
            />
          </styled.Div>
        </DrinkImageContainer>
        <CartSummaryContainer>
          <h2>Totalt:</h2>
          <styled.H1 css={{ textAlign: "center", marginTop: 24 }}>
            {totalCost} kr
          </styled.H1>
          <styled.Div css={{ display: "flex", marginTop: 24 }}>
            <Button
              onClick={() => setOrderConfirmed(true)}
              value="Köp"
              type="good"
              css={{
                flexGrow: 1,
                marginRight: 10
              }}
            />
            <Button
              type="bad"
              value="Tillbaka"
              onClick={() => props.setRoute({ route: "drinksList", data: {} })}
            />
          </styled.Div>
        </CartSummaryContainer>
      </styled.Div>
      <CheckoutIngredients
        isRecipe={false}
        cart={cart}
        showInstructions={showInstructions}
        setRoute={props.setRoute}
        setCheckoutDrink={setCheckoutDrink}
        setShowInstructions={setShowInstructions}
        checkoutDrink={checkoutDrink}
      />
      <IngredientImagesBox>
        {cart.map(s => (
          <styled.Div
            css={{
              flexBasis: "50%",
              textAlign: "center",
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: {
                y: 5
              }
            }}
          >
            <styled.Img
              css={{
                maxWidth: "100%",
                maxHeight: "100%"
              }}
              src={s.ingredient.image}
            />
          </styled.Div>
        ))}
      </IngredientImagesBox>
    </styled.Div>
  );
};

const BoxWithShadow = styled.div({
  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.08)",
  padding: {
    xy: 24
  },
  margin: {
    xy: 24
  }
});

const IngredientImagesBox = styled(BoxWithShadow, {
  width: 250,
  display: "flex",
  flexWrap: "wrap"
});

const CartSummaryContainer = styled(BoxWithShadow);

const DrinkImageContainer = styled(BoxWithShadow);

function calculateTotals(drink: DrinkType) {
  const selectedIngredients: Array<{
    ingredient: IngredientType;
    amount: number;
    cost: number;
    unit: UnitType;
  }> = [];

  for (let ingredient of drink.ingredientLineItems) {
    let ingredientData: IngredientType | undefined;

    // First default selection
    if (ingredient.specificSelection) {
      ingredientData = ingredientsList.find(
        i => i.identifier === ingredient.specificSelection
      );
      if (ingredientData) {
        selectedIngredients.push({
          cost: ingredientData.pricePerUnit * ingredient.amount,
          ingredient: ingredientData,
          amount: ingredient.amount,
          unit: ingredient.unit
        });
        continue;
      }
    }

    // Then name
    ingredientData = ingredientsList.find(i => i.name === ingredient.name);
    if (ingredientData) {
      selectedIngredients.push({
        cost: ingredientData.pricePerUnit * ingredient.amount,
        ingredient: ingredientData,
        amount: ingredient.amount,
        unit: ingredient.unit
      });
      continue;
    }

    // Then first by type
    ingredientData = ingredientsList.find(i => i.type === ingredient.type);
    if (ingredientData) {
      selectedIngredients.push({
        cost: ingredientData.pricePerUnit * ingredient.amount,
        ingredient: ingredientData,
        amount: ingredient.amount,
        unit: ingredient.unit
      });
      continue;
    } else {
      throw Error("No match for ingredient");
    }
  }
  return selectedIngredients;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function saveOrder(
  drink: DrinkType,
  cart: { ingredient: IngredientType; amount: number; cost: number }[],
  totalCost: number,
  orderNumber: string
) {
  let savedOrders: any = localStorage.getItem("savedOrders");
  if (!savedOrders) {
    savedOrders = JSON.stringify([]);
  }

  savedOrders = JSON.parse(savedOrders);

  savedOrders = [
    ...savedOrders,
    {
      orderNumber,
      drink,
      cart,
      totalCost
    }
  ];

  localStorage.setItem("savedOrders", JSON.stringify(savedOrders));
}
