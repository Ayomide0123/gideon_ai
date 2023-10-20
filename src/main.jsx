import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Login from "./components/Login";
import { store } from "./services/store";
import HankoProfile from "./components/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/profile" element={<HankoProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
