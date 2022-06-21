import React from "react";

import { store } from "./Redux/cresidentials";
import { Provider } from "react-redux";

import Route from "./Router/Route";

export default function Tugas13b() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
