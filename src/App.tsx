import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import TestDrive from "./pages/TestDrive";
import MainLayout from "./layouts/MainLayout";
import Favorites from "./pages/Favorites";

import "./scss/app.scss";
import Buying from "./components/Buying/Buying";

interface searchContextType {
  searchValue: string
  setSearchValue?: (value: string) => void;
}
export const searchContext = createContext<searchContextType | undefined>(undefined);

function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">
      <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/testDrive" element={<TestDrive />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/buying" element={<Buying />} />
          </Route>
        </Routes>
      </searchContext.Provider>
    </div>
  );
}

export default App;
