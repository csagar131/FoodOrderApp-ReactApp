import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import Card from "../UI/Card";
import Cart from "../Cart/Cart";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={() => props.closeCart()}></div>;
};

const OverLay = (props) => {
  return (
    <Card>
      <div className={classes.modal}>
        <Cart closeCart={props.closeCart} />
      </div>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop closeCart={props.closeCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay closeCart={props.closeCart} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
