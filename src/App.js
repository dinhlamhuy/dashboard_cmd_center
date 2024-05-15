/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";

// import HomeScreen from "./screens/home/HomeScreenver3x3_win.js";
import HomeScreen from "./screens/home/HomeScreenver3x3_mini.js";

import MenuScreen from "./screens/home/MenuScreen.js";
import {DB_Routers } from "./utils/DB_Route.js";
// import { lazy } from "react";
// const OneScreen = lazy(()=> import("./screens/OneScreen/index.js"));

import OneScreen from "./screens/OneScreen/index.js";
import HomeScreen4x4 from "./screens/home/HomeScreenver4x4.js";
import MenuScreen4x4 from "./screens/home/MenuScreen4x4.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/4x4" element={<HomeScreen4x4 />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/menu4x4" element={<MenuScreen4x4 />} />
      <Route path="/screen/:id" element={<OneScreen  />} />
      {DB_Routers()}

    </Routes>
  );
}

export default App;
