import React from "react";
import { useDispatch } from "react-redux";
import { contants } from "../redux/contants";
import '../App.css'

export default function Money() {
  const dispatch = useDispatch();

  const depositHandler = () => {
    dispatch({ type: contants.deposit, payload: 1000 });
  };

  const withdrawHandler = () => {
    dispatch({ type: contants.withdraw, payload: 500 });
  };

  return (
    <div className="button-container">
      <button className="button" onClick={depositHandler}>
        DEPOSIT
      </button>
      <button className="button" onClick={withdrawHandler}>
        WITHDRAW
      </button>
    </div>
  );
}
