/* eslint-disable import/no-anonymous-default-export */
import CompScreen from "../screens/CompScreen";
import HourlyOutPutByFloor from "../component/DB_HourlyOutPutByFloor/HourlyOutPutByFloor";
import StockFittingQuality from "../component/DB_StockFittingQuality/StockFittingQuality";

import { Route } from "react-router-dom";
import HR from "../component/DB_HR/HR";
import Data_KPI_Total from "../component/DB_Data_KPI_Total/Data_KPI_Total";
import AssemblyQuality from "../component/DB_AssemblyQuality/AssemblyQuality";
import CS3_Trial_Schedule from "../component/DB_CS3_Trial_Schedule/CS3_Trial_Schedule";
export const DB_Route = {
  HourlyOutPutByFloor,
  StockFittingQuality,
  HR,
  Data_KPI_Total,
  AssemblyQuality,
  CS3_Trial_Schedule
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
