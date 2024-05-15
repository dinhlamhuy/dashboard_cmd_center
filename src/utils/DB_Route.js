/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react';
import { Route } from "react-router-dom";
import HumidityOverview from '../component/DB_HumidityOverview/HumidityOverview';
import Human_Resource from '../component/DB_HR_New/Human_Resource';
import Critical_Model from '../component/DB_Critical_Model/Critical_Model';



// import CompScreen from "../screens/CompScreen";
const CompScreen = lazy(()=> import("../screens/CompScreen"));
const StockFittingQuality = lazy(()=> import("../component/DB_StockFittingQuality/StockFittingQuality"));
const Data_KPI_Total = lazy(()=> import("../component/DB_Data_KPI_Total/Data_KPI_Total"));
const HR = lazy(()=> import("../component/DB_HR/HR"));
const AssemblyQuality = lazy(()=> import("../component/DB_AssemblyQuality/AssemblyQuality"));
const Trial_Schedule_Season = lazy(()=> import("../component/DB_Trial_Schedule_Season/TrialSchedule"));
const Availability_KPI = lazy(()=> import("../component/DB_Availability_KPI/Availability_KPI"));
const Shipping_Shedule = lazy(()=> import("../component/DB_Shipping_Shedule/Shipping_Shedule"));
const HourlyOutPutByModel = lazy(()=> import("../component/DB_HourlyOutPutByModel/HourlyOutPutByModel"));
const HourlyOutPutByFloor = lazy(()=> import("../component/DB_HourlyOutPutByFloor/HourlyOutPutByFloor"));
const StockFittingQuality_VerEn = lazy(()=> import("../component/DB_StockFittingQuality/StockFittingQuanlity_VerEn"));
const Stock_Fitting = lazy(()=>import("../component/DB_Stock_Fitting/Stock_Fitting"));
const Data_Quality = lazy(()=> import("../component/DB_Data_Quality/Data_Quality"));
const Data_Product_Type = lazy(()=> import("../component/DB_Data_Product_Type/Data_Product_Type"));
const StockFittingQuality_China = lazy(()=> import("../component/DB_StockFittingQuality/StockFittingQuality_VerChina"));





export const DB_Route = {
  HourlyOutPutByFloor,
  StockFittingQuality,
  HR,
  Data_KPI_Total,
  AssemblyQuality,
  Trial_Schedule_Season,
  Availability_KPI,
  Stock_Fitting,
  Data_Product_Type,
  Data_Quality,
  StockFittingQuality_China,
  StockFittingQuality_VerEn,
  Shipping_Shedule,
  HourlyOutPutByModel,
  HumidityOverview,
  Human_Resource,
  Critical_Model
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
