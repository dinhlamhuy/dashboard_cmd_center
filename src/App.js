/* eslint-disable react/jsx-pascal-case */
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home/HomeScreen.js";

import DetailScreen from "./screens/home/DetailScreen.js";
import {DB_Routers} from "./utils/DB_Route.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/detail" element={<DetailScreen />} />
      {DB_Routers()}

    </Routes>
  );
}

export default App;
