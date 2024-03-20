/* eslint-disable import/no-anonymous-default-export */
import CompScreen from "../screens/CompScreen";
import BaoCaoSanLuong from "../component/DB_BaoCaoSanLuong/BaoCaoSanLuong";
import StockFitting from "../component/DB_StockFitting/StockFitting";

import { Route } from "react-router-dom";
export const DB_Route = {
  BaoCaoSanLuong,
  StockFitting,
};

export const DB_Routers = () => {
  return (
    <>
      {Object.entries(DB_Route).map(([routePath, Component]) => (
       

        <Route
          key={routePath}
          path={`/${routePath}`}
          element={<CompScreen Component={Component} />}
        />
      ))}
    </>
  );
};
