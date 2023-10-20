import { Provider } from "react-redux";
import App from "./App";
import Login from "./components/Login";
import { store } from "./services/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const EntryPoint = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default EntryPoint;
