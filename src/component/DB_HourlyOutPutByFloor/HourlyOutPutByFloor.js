/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";

function HourlyOutPutByFloor() {
    const currentDate = new Date();

const day = currentDate.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if necessary
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get the month (add 1 as it's zero-based) and pad with leading zero if necessary
const year = currentDate.getFullYear(); // Get the full year

const formattedDate = `${day}/${month}/${year}`;
  const [listHourlyOutput, setListHourlyOutput] = useState( [
    {
        "line": "A_M01",
        "Total_Member": 109,
        "Today_Absent": 6,
        "InDirect": 0,
        "Today_member": 103,
        "CAPACITY": 995,
        "TARGET": 105,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M02",
        "Total_Member": 108,
        "Today_Absent": 25,
        "InDirect": 0,
        "Today_member": 83,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M03",
        "Total_Member": 103,
        "Today_Absent": 64,
        "InDirect": 4,
        "Today_member": 39,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M04",
        "Total_Member": 93,
        "Today_Absent": 13,
        "InDirect": 2,
        "Today_member": 80,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M05",
        "Total_Member": 91,
        "Today_Absent": 20,
        "InDirect": 1,
        "Today_member": 71,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M06",
        "Total_Member": 102,
        "Today_Absent": 11,
        "InDirect": 0,
        "Today_member": 91,
        "CAPACITY": 825,
        "TARGET": 87,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 606,
        "Today_Absent": 139,
        "InDirect": 7,
        "Today_member": 467,
        "CAPACITY": 9230,
        "TARGET": 972,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G01",
        "Total_Member": 73,
        "Today_Absent": 19,
        "InDirect": 2,
        "Today_member": 54,
        "CAPACITY": 995,
        "TARGET": 105,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G02",
        "Total_Member": 69,
        "Today_Absent": 22,
        "InDirect": 1,
        "Today_member": 47,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G03",
        "Total_Member": 70,
        "Today_Absent": 34,
        "InDirect": 1,
        "Today_member": 36,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G04",
        "Total_Member": 69,
        "Today_Absent": 41,
        "InDirect": 1,
        "Today_member": 28,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G05",
        "Total_Member": 66,
        "Today_Absent": 38,
        "InDirect": 4,
        "Today_member": 28,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G06",
        "Total_Member": 72,
        "Today_Absent": 28,
        "InDirect": 0,
        "Today_member": 44,
        "CAPACITY": 825,
        "TARGET": 87,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 419,
        "Today_Absent": 182,
        "InDirect": 9,
        "Today_member": 237,
        "CAPACITY": 9230,
        "TARGET": 972,
        "Hour_8": 300,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M08",
        "Total_Member": 101,
        "Today_Absent": 6,
        "InDirect": 0,
        "Today_member": 95,
        "CAPACITY": 1425,
        "TARGET": 150,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M10",
        "Total_Member": 111,
        "Today_Absent": 12,
        "InDirect": 0,
        "Today_member": 99,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M11",
        "Total_Member": 117,
        "Today_Absent": 16,
        "InDirect": 0,
        "Today_member": 101,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 329,
        "Today_Absent": 34,
        "InDirect": 0,
        "Today_member": 295,
        "CAPACITY": 4845,
        "TARGET": 510,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G08",
        "Total_Member": 73,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 71,
        "CAPACITY": 1425,
        "TARGET": 150,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G10",
        "Total_Member": 70,
        "Today_Absent": 4,
        "InDirect": 0,
        "Today_member": 66,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G11",
        "Total_Member": 64,
        "Today_Absent": 11,
        "InDirect": 0,
        "Today_member": 53,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 207,
        "Today_Absent": 17,
        "InDirect": 0,
        "Today_member": 190,
        "CAPACITY": 4845,
        "TARGET": 510,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G01",
        "Total_Member": 65,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 65,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 14,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G02",
        "Total_Member": 58,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 58,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 123,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 123,
        "CAPACITY": 3800,
        "TARGET": 400,
        "Hour_8": 164,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M01",
        "Total_Member": 95,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 95,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M02",
        "Total_Member": 113,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 113,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 61,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M06",
        "Total_Member": 107,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 107,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 315,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 315,
        "CAPACITY": 5700,
        "TARGET": 600,
        "Hour_8": 61,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_G01",
        "Total_Member": 59,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 57,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_G02",
        "Total_Member": 73,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 73,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_G06",
        "Total_Member": 55,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 54,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 180,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 187,
        "Today_Absent": 3,
        "InDirect": 0,
        "Today_member": 184,
        "CAPACITY": 5700,
        "TARGET": 600,
        "Hour_8": 340,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M01",
        "Total_Member": 114,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 112,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M02",
        "Total_Member": 115,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 113,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M03",
        "Total_Member": 109,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 108,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M04",
        "Total_Member": 117,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 115,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M06",
        "Total_Member": 114,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 114,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 569,
        "Today_Absent": 7,
        "InDirect": 0,
        "Today_member": 562,
        "CAPACITY": 9500,
        "TARGET": 1000,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G01",
        "Total_Member": 61,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 60,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 1,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G02",
        "Total_Member": 64,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 63,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G03",
        "Total_Member": 64,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 62,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 180,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G04",
        "Total_Member": 64,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 64,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 180,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G06",
        "Total_Member": 62,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 62,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G07",
        "Total_Member": 64,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 63,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 379,
        "Today_Absent": 5,
        "InDirect": 0,
        "Today_member": 374,
        "CAPACITY": 11400,
        "TARGET": 1200,
        "Hour_8": 361,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_M01",
        "Total_Member": 123,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 121,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_M02",
        "Total_Member": 110,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 110,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_M03",
        "Total_Member": 106,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 106,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_M06",
        "Total_Member": 98,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 98,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 437,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 435,
        "CAPACITY": 7220,
        "TARGET": 760,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_G01",
        "Total_Member": 68,
        "Today_Absent": 3,
        "InDirect": 0,
        "Today_member": 65,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 170,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_G02",
        "Total_Member": 63,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 62,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 190,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_G03",
        "Total_Member": 69,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 67,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 180,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D1_G06",
        "Total_Member": 67,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 67,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 267,
        "Today_Absent": 6,
        "InDirect": 0,
        "Today_member": 261,
        "CAPACITY": 7220,
        "TARGET": 760,
        "Hour_8": 540,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M01",
        "Total_Member": 62,
        "Today_Absent": 4,
        "InDirect": 0,
        "Today_member": 58,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 80,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M02",
        "Total_Member": 65,
        "Today_Absent": 1,
        "InDirect": 0,
        "Today_member": 64,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M03",
        "Total_Member": 60,
        "Today_Absent": 3,
        "InDirect": 1,
        "Today_member": 57,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M05",
        "Total_Member": 58,
        "Today_Absent": 5,
        "InDirect": 1,
        "Today_member": 53,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M07",
        "Total_Member": 62,
        "Today_Absent": 20,
        "InDirect": 2,
        "Today_member": 42,
        "CAPACITY": 855,
        "TARGET": 90,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M08",
        "Total_Member": 58,
        "Today_Absent": 17,
        "InDirect": 0,
        "Today_member": 41,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_M11",
        "Total_Member": 62,
        "Today_Absent": 7,
        "InDirect": 2,
        "Today_member": 55,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 427,
        "Today_Absent": 57,
        "InDirect": 6,
        "Today_member": 370,
        "CAPACITY": 7125,
        "TARGET": 750,
        "Hour_8": 80,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G01",
        "Total_Member": 34,
        "Today_Absent": 0,
        "InDirect": 0,
        "Today_member": 34,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G02",
        "Total_Member": 39,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 37,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G03",
        "Total_Member": 32,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 30,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G04",
        "Total_Member": 38,
        "Today_Absent": 3,
        "InDirect": 1,
        "Today_member": 35,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G05",
        "Total_Member": 33,
        "Today_Absent": 4,
        "InDirect": 0,
        "Today_member": 29,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 80,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G07",
        "Total_Member": 31,
        "Today_Absent": 2,
        "InDirect": 0,
        "Today_member": 29,
        "CAPACITY": 855,
        "TARGET": 90,
        "Hour_8": 80,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G08",
        "Total_Member": 33,
        "Today_Absent": 7,
        "InDirect": 1,
        "Today_member": 26,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 90,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G10",
        "Total_Member": 39,
        "Today_Absent": 13,
        "InDirect": 0,
        "Today_member": 26,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 0,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "D3_G11",
        "Total_Member": 39,
        "Today_Absent": 5,
        "InDirect": 0,
        "Today_member": 34,
        "CAPACITY": 1045,
        "TARGET": 110,
        "Hour_8": 65,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 318,
        "Today_Absent": 38,
        "InDirect": 2,
        "Today_member": 280,
        "CAPACITY": 9215,
        "TARGET": 970,
        "Hour_8": 315,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "M_ALL",
        "Total_Member": 2683,
        "Today_Absent": 239,
        "InDirect": 13,
        "Today_member": 2444,
        "CAPACITY": 43620,
        "TARGET": 4592,
        "Hour_8": 141,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "G_ALL",
        "Total_Member": 1900,
        "Today_Absent": 251,
        "InDirect": 11,
        "Today_member": 1649,
        "CAPACITY": 51410,
        "TARGET": 5412,
        "Hour_8": 2020,
        "Hour_9": 0,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    }
]);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/bcsl/sanluongline")
      .then((response) => {
        // console.log(response.data.data);
        setListHourlyOutput(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    // getAPIcheck();
  }, []);

  return (
    <>
      <div className="w-full h-full  bg-black overflow-hidden">
        <p className="flex justify-center text-white text-4xl font-bold py-4">HOURLY OUT PUT - BY FLOOR {formattedDate}</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full w-full ">
          <div className="flex justify-center px-3">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                  <th className="text-base text-blue-300 w-12 ">Line</th>
                  <th className="text-base text-blue-300 w-12 ">Total Member</th>
                  <th className="text-base text-blue-300 w-12 ">In Direct</th>
                  <th className="text-base text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-base text-blue-300 w-12 ">Today Member</th>
                  <th className="text-base text-blue-300 w-12 ">Capacity</th>
                  <th className="text-base text-blue-300 w-12 ">Target</th>
                  <th className="text-base text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-base text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-base text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-base text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-base text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-base text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-base text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-base text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-base text-blue-300 w-12 ">15:30-16:30</th>
                </tr>
              </thead>
              <tbody>
                {listHourlyOutput &&
                  listHourlyOutput
                    .slice(0, Math.ceil(listHourlyOutput.length / 2))
                    .map((item, index) => {
                      const colortr =
                        item.line === "Total" ? "bg-gray-400" : "";
                      return (
                        <tr key={"sl" + index} className={`${colortr}`}>
                          <td className=" text-base text-yellow-400 font-bold ">
                            {item.line}
                          </td>
                          <td className=" text-base text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className=" text-base text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className=" text-base text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className=" text-base text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className=" text-base text-green-400 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_16 != "0" ? item.Hour_16 : ""}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center px-3">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                  <th className="text-base text-blue-300 w-12 ">Line</th>
                  <th className="text-base text-blue-300 w-12 ">Total Member</th>
                  <th className="text-base text-blue-300 w-12 ">In Direct</th>
                  <th className="text-base text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-base text-blue-300 w-12 ">Today Member</th>
                  <th className="text-base text-blue-300 w-12 ">Capacity</th>
                  <th className="text-base text-blue-300 w-12 ">Target</th>
                  <th className="text-base text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-base text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-base text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-base text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-base text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-base text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-base text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-base text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-base text-blue-300 w-12 ">15:30-16:30</th>
                </tr>
              </thead>
              <tbody>
                {listHourlyOutput &&
                  listHourlyOutput
                  .slice(Math.ceil(listHourlyOutput.length / 2))
                    .map((item, index) => {
                      const colortr =
                        item.line === "Total" ? "bg-gray-400" : "";
                      return (
                        <tr key={"sl" + index} className={`${colortr}`}>
                          <td className=" text-base text-yellow-400 font-bold ">
                            {item.line}
                          </td>
                          <td className=" text-base text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className=" text-base text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className=" text-base text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className=" text-base text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className=" text-base text-green-400 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className=" text-base text-white font-bold text-center">
                            {item.Hour_16 != "0" ? item.Hour_16 : ""}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default HourlyOutPutByFloor;
