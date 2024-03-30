/* eslint-disable import/no-anonymous-default-export */
import CompScreen from "../screens/CompScreen";
import HourlyOutPutByFloor from "../component/DB_HourlyOutPutByFloor/HourlyOutPutByFloor";
import StockFittingQuality from "../component/DB_StockFittingQuality/StockFittingQuality";

import { Route } from "react-router-dom";
import HR from "../component/DB_HR/HR";
import Data_KPI_Total from "../component/DB_Data_KPI_Total/Data_KPI_Total";
import AssemblyQuality from "../component/DB_AssemblyQuality/AssemblyQuality";
import Trial_Schedule_Season from "../component/DB_Trial_Schedule_Season/Trial_Schedule_Season";
import Availability_KPI from "../component/DB_Availability_KPI/Availability_KPI";
import Stock_Fitting from "../component/DB_Stock_Fitting/Stock_Fitting";
import Data_Product_Type from "../component/DB_Data_Product_Type/Data_Product_Type";
import Data_Quality from "../component/DB_Data_Quality/Data_Quality";
export const DB_Route = {
  HourlyOutPutByFloor,
  StockFittingQuality,
  HR,
  Data_KPI_Total,
  AssemblyQuality,
  Trial_Schedule_Season,
  Availability_KPI,Stock_Fitting, Data_Product_Type, Data_Quality

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
