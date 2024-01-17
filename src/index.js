import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componenets/root/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import "alertifyjs/build/css/alertify.min.css";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
