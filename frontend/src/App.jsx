import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Profile } from "./Pages/Profile";
import PrivateRoute from "./Pages/PrivateRoute";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/Profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
