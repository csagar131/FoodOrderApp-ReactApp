import React, { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const context = useContext(CartContext);
  const qtyRef = useRef();

  const addItemToCart = (e) => {
    e.preventDefault();
    const enteredQty = +qtyRef.current.value
    if(enteredQty < 1 || enteredQty > 5){
      return
    }
    context.addItem(props.mealItem, enteredQty);
  };

  return (
    <form className={classes.form}>
      <Input
        input={{
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
          id: props.id,
        }}
        label="Qty:"
        ref={qtyRef}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
