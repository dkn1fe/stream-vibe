import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/app/store/store.ts";
import { ScrollTop } from "./components/scrollTop/ScrollTop.tsx";
import "./index.css";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollTop>
    </BrowserRouter>
  </React.StrictMode>
);
