import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./pages/404";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home searchValue={searchValue} />}
              ></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
