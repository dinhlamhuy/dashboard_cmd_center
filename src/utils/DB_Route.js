/* eslint-disable import/no-anonymous-default-export */
import CompScreen from "../screens/CompScreen";
import HourlyOutPutByFloor from "../component/DB_HourlyOutPutByFloor/HourlyOutPutByFloor";
import StockFitting from "../component/DB_StockFitting/StockFitting";

import { Route } from "react-router-dom";
import HR from "../component/DB_HR/HR";
import Data_KPI_Total from "../component/DB_Data_KPI_Total/Data_KPI_Total";
export const DB_Route = {
  HourlyOutPutByFloor,
  StockFitting,
  HR,
  Data_KPI_Total
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
