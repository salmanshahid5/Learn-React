import React from "react";
import { useSelector } from "react-redux";
import Money from "./money";
import '../App.css'

function Bank() {
  const { balance, accountName } = useSelector((state) => state.bankReducer);

  return (
    <>
      <Money />
      <div className="bank-container">
        <h3>Name: {accountName}</h3>
        <p>Balance: ${balance}</p>
      </div>
    </>
  );
}

export default Bank;
