import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import {FavoritesContextProvider} from './store/favorites-context'
//import context provider in curly braces as component function 
//wrap everything with it to provide context

ReactDOM.render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
