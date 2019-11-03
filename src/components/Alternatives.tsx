import React, { useState } from "react";
import { styled } from "@glitz/react";
import { IngredientType, ingredientsList, DrinkType } from "../data";
import Button from "./Button";

type PropType = {
  ingredient: IngredientType;
  lineItem: LineItemType;
  lineItemIndex: number;
  checkoutDrink: DrinkType;
  setCheckoutDrink: (newState: DrinkType) => any;
};

type LineItemType = {
  ingredient: IngredientType;
  amount: number;
  cost: number;
};

export default (props: PropType) => {
  const {
    ingredient,
    lineItem,
    lineItemIndex,
    checkoutDrink,
    setCheckoutDrink
  } = props;
  const alternatives = findAlternatives(ingredient);
  const [showAll, setShowAll] = useState(false);

  if (!alternatives.length) return null;

  return (
    <styled.Div
      css={{
        paddingBottom: 20,
        marginTop: 30,
        borderBottom: {
          width: 2,
          color: "#1c1c1c",
          style: "solid"
        },
        textAlign: "right"
      }}
    >
      <h3>Alternativ för {lineItem.ingredient.type}</h3>
      {alternatives.map((alternativeIngredientData, index) => {
        const changeToThisAlternative = () => {
          const ingrientLineItems = [...checkoutDrink.ingredientLineItems];
          const newLineItem = {
            ...ingrientLineItems[lineItemIndex],
            defaultSelection: alternativeIngredientData.identifier
          };
          ingrientLineItems.splice(lineItemIndex, 1, newLineItem);

          const newState = {
            ...checkoutDrink,
            ingredientLineItems: ingrientLineItems
          };

          setCheckoutDrink(newState);
        };

        if (index > 2 && !showAll) {
          return index === 3 ? (
            <Button
              value="Visa alla..."
              key="showall"
              onClick={() => setShowAll(true)}
              css={{ margin: { xy: 5 }, height: 40 }}
            />
          ) : null;
        }
        return (
          <Button
            key={alternativeIngredientData.name}
            value={
              alternativeIngredientData.name +
              " - " +
              Math.round(
                alternativeIngredientData.pricePerUnit * lineItem.amount * 100
              ) /
                100 +
              " kr"
            }
            onClick={changeToThisAlternative}
            css={{ margin: { xy: 5 }, height: 40 }}
          />
        );
      })}
    </styled.Div>
  );
};

function findAlternatives(ingredient: IngredientType): IngredientType[] {
  return ingredientsList.filter(
    s =>
      s.type === ingredient.type &&
      s.identifier !== ingredient.identifier &&
      s.type !== "Liquor" &&
      s.type !== "Juice" &&
      s.type !== "Other" &&
      s.type !== "Leaves"
  );
}
