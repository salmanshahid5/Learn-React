import React from "react";
import Bank from "./components/Bank";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Bank />
      </div>
    </Provider>
  );
}
