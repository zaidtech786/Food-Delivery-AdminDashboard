import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppContext, AppProvider } from "./context/AuthContext";
// import { AppContext } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
