import React, { useState } from "react";
import Header from "./components/Header";
import ProductsPage from "./components/ProductsPage";
import Footer from "./components/Footer";
import Amazon from "./store/Store";
import { UserCrenditials } from "./store/Store";

const App = () => {
  let [isDark, setIsdark] = useState(false);
  let [isloggin, setIsLoggin] = useState(false);

  let login =()=> setIsLoggin(true);
  let logout =()=> setIsLoggin(false);

  let toggleTheme = () => {
    setIsdark(!isDark);
  };

  return (
    <UserCrenditials.Provider value={{ login, logout }}>
      {isloggin?"login":"logoout"}
      <Amazon.Provider value={{ isDark, toggleTheme }}>
        <Header />
        <ProductsPage />
        <Footer />
      </Amazon.Provider>
    </UserCrenditials.Provider>
  );
};

export default App;
