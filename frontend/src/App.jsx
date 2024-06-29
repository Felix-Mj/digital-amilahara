import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Profile } from "./Pages/Profile";
import PrivateRoute from "./Pages/PrivateRoute";
import News from "./Pages/News";
import Vlogs from "./Pages/Vlogs";
import Gallerys from "./Pages/Gallerys";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ViewPage from "./Pages/ViewPage";
import Footerpage from "./Pages/Footerpage";


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
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Vlogs />}/>
            <Route path="/gallerys" element={<Gallerys />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blog/:id" element={<ViewPage />}/>
          </Routes>
          <Footerpage/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
