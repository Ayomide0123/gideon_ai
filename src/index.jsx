import { Provider } from "react-redux";
import App from "./App";
import Login from "./components/Login";
import { store } from "./services/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HankoProfile from "./components/Profile";

const EntryPoint = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/profile" element={<HankoProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default EntryPoint;
