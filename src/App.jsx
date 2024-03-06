import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./index.css";
import Accessories from "./components/accessories/accessories";
import Clothes from "./components/clothesPage/Clothes";
import Home from "./components/Home/Home";
import Shoes from "./components/shoesPage/shoes";
import Account from "./components/account/Account";
import Shopping from "./components/Shopping/shopping";

import { useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center pt-[400px]">
          <PacmanLoader loading={loading} color={"#d50000"} size={100} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Account" element={<Account />} />
          <Route path="Shopping" element={<Shopping />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
