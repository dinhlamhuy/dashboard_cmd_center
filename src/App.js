/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home/HomeScreen.js";

import MenuScreen from "./screens/home/MenuScreen.js";
import {DB_Routers} from "./utils/DB_Route.js";
import OneScreen from "./screens/OneScreen/index.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/menu" element={<MenuScreen />} />
      <Route path="/screen/:id" element={<OneScreen  />} />
      {DB_Routers()}

    </Routes>
  );
}

export default App;
