import { Provider } from "react-redux";
import App from "./App";
import Login from "./components/Login";
import { store } from "./services/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutePreserver from "./RoutePreserver";

const EntryPoint = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutePreserver />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default EntryPoint;
