import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if(process.env.NODE_ENV === 'production')disableReactDevTools()

const container = document.getElementById("root")!;
const root = createRoot(container);

console.log = () => {}
console.error = () => {}
console.debug = () => {}
console.warn = ()=>{}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
