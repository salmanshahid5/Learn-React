import React from "react";

const initialState = {
  balance: 5000,
  accountName: "salman",
};

export default function bankReducer(state = initialState, action) {

  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    default:
      return state;
  }
}
