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
  const [listHourlyOutput, setListHourlyOutput] = useState([
    {
        "line": "A_M01",
        "Total_Member": 109,
        "Today_Absent": 101,
        "InDirect": 6,
        "Today_member": 8,
        "CAPACITY": 995,
        "TARGET": 105,
        "Hour_8": 80,
        "Hour_9": 105,
        "Hour_10": 105,
        "Hour_11": 105,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M02",
        "Total_Member": 110,
        "Today_Absent": 95,
        "InDirect": 4,
        "Today_member": 15,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M03",
        "Total_Member": 104,
        "Today_Absent": 87,
        "InDirect": 7,
        "Today_member": 17,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 160,
        "Hour_9": 160,
        "Hour_10": 161,
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
        "Today_Absent": 78,
        "InDirect": 7,
        "Today_member": 15,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M05",
        "Total_Member": 91,
        "Today_Absent": 78,
        "InDirect": 3,
        "Today_member": 13,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 110,
        "Hour_9": 110,
        "Hour_10": 0,
        "Hour_11": 112,
        "Hour_12": 0,
        "Hour_13": 112,
        "Hour_14": 113,
        "Hour_15": 113,
        "Hour_16": 115
    },
    {
        "line": "A_M06",
        "Total_Member": 102,
        "Today_Absent": 92,
        "InDirect": 2,
        "Today_member": 10,
        "CAPACITY": 825,
        "TARGET": 87,
        "Hour_8": 100,
        "Hour_9": 112,
        "Hour_10": 112,
        "Hour_11": 115,
        "Hour_12": 0,
        "Hour_13": 117,
        "Hour_14": 120,
        "Hour_15": 120,
        "Hour_16": 120
    },
    {
        "line": "Total",
        "Total_Member": 609,
        "Today_Absent": 531,
        "InDirect": 29,
        "Today_member": 78,
        "CAPACITY": 9230,
        "TARGET": 972,
        "Hour_8": 760,
        "Hour_9": 797,
        "Hour_10": 688,
        "Hour_11": 642,
        "Hour_12": 0,
        "Hour_13": 229,
        "Hour_14": 233,
        "Hour_15": 233,
        "Hour_16": 235
    },
    {
        "line": "A_G01",
        "Total_Member": 74,
        "Today_Absent": 62,
        "InDirect": 4,
        "Today_member": 12,
        "CAPACITY": 995,
        "TARGET": 105,
        "Hour_8": 110,
        "Hour_9": 110,
        "Hour_10": 120,
        "Hour_11": 120,
        "Hour_12": 0,
        "Hour_13": 120,
        "Hour_14": 120,
        "Hour_15": 120,
        "Hour_16": 0
    },
    {
        "line": "A_G02",
        "Total_Member": 69,
        "Today_Absent": 65,
        "InDirect": 4,
        "Today_member": 4,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 150,
        "Hour_15": 150,
        "Hour_16": 0
    },
    {
        "line": "A_G03",
        "Total_Member": 70,
        "Today_Absent": 63,
        "InDirect": 2,
        "Today_member": 7,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 155,
        "Hour_11": 155,
        "Hour_12": 0,
        "Hour_13": 155,
        "Hour_14": 155,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G04",
        "Total_Member": 69,
        "Today_Absent": 63,
        "InDirect": 3,
        "Today_member": 6,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 150,
        "Hour_15": 150,
        "Hour_16": 0
    },
    {
        "line": "A_G05",
        "Total_Member": 66,
        "Today_Absent": 58,
        "InDirect": 5,
        "Today_member": 8,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 140,
        "Hour_10": 145,
        "Hour_11": 145,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 160,
        "Hour_16": 0
    },
    {
        "line": "A_G06",
        "Total_Member": 73,
        "Today_Absent": 64,
        "InDirect": 4,
        "Today_member": 9,
        "CAPACITY": 825,
        "TARGET": 87,
        "Hour_8": 100,
        "Hour_9": 100,
        "Hour_10": 105,
        "Hour_11": 110,
        "Hour_12": 0,
        "Hour_13": 110,
        "Hour_14": 110,
        "Hour_15": 110,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 421,
        "Today_Absent": 375,
        "InDirect": 22,
        "Today_member": 46,
        "CAPACITY": 9230,
        "TARGET": 972,
        "Hour_8": 820,
        "Hour_9": 800,
        "Hour_10": 825,
        "Hour_11": 830,
        "Hour_12": 0,
        "Hour_13": 845,
        "Hour_14": 845,
        "Hour_15": 690,
        "Hour_16": 0
    },
    {
        "line": "A_M08",
        "Total_Member": 101,
        "Today_Absent": 93,
        "InDirect": 5,
        "Today_member": 8,
        "CAPACITY": 1425,
        "TARGET": 150,
        "Hour_8": 125,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 19,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M09",
        "Total_Member": 105,
        "Today_Absent": 95,
        "InDirect": 5,
        "Today_member": 10,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 140,
        "Hour_9": 140,
        "Hour_10": 140,
        "Hour_11": 140,
        "Hour_12": 0,
        "Hour_13": 140,
        "Hour_14": 140,
        "Hour_15": 120,
        "Hour_16": 120
    },
    {
        "line": "A_M10",
        "Total_Member": 111,
        "Today_Absent": 98,
        "InDirect": 4,
        "Today_member": 13,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 180,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M11",
        "Total_Member": 118,
        "Today_Absent": 109,
        "InDirect": 9,
        "Today_member": 9,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 130,
        "Hour_9": 130,
        "Hour_10": 130,
        "Hour_11": 130,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M12",
        "Total_Member": 115,
        "Today_Absent": 96,
        "InDirect": 4,
        "Today_member": 19,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 155,
        "Hour_9": 85,
        "Hour_10": 0,
        "Hour_11": 0,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_M13",
        "Total_Member": 117,
        "Today_Absent": 108,
        "InDirect": 4,
        "Today_member": 9,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 185,
        "Hour_9": 185,
        "Hour_10": 185,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 667,
        "Today_Absent": 599,
        "InDirect": 31,
        "Today_member": 68,
        "CAPACITY": 10165,
        "TARGET": 1070,
        "Hour_8": 915,
        "Hour_9": 870,
        "Hour_10": 785,
        "Hour_11": 780,
        "Hour_12": 0,
        "Hour_13": 159,
        "Hour_14": 140,
        "Hour_15": 120,
        "Hour_16": 120
    },
    {
        "line": "A_G08",
        "Total_Member": 73,
        "Today_Absent": 67,
        "InDirect": 5,
        "Today_member": 6,
        "CAPACITY": 1425,
        "TARGET": 150,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 120,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 150,
        "Hour_15": 150,
        "Hour_16": 0
    },
    {
        "line": "A_G09",
        "Total_Member": 66,
        "Today_Absent": 61,
        "InDirect": 3,
        "Today_member": 5,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 140,
        "Hour_9": 140,
        "Hour_10": 140,
        "Hour_11": 140,
        "Hour_12": 0,
        "Hour_13": 140,
        "Hour_14": 120,
        "Hour_15": 120,
        "Hour_16": 0
    },
    {
        "line": "A_G10",
        "Total_Member": 70,
        "Today_Absent": 67,
        "InDirect": 4,
        "Today_member": 3,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 170,
        "Hour_9": 170,
        "Hour_10": 170,
        "Hour_11": 170,
        "Hour_12": 0,
        "Hour_13": 170,
        "Hour_14": 170,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G11",
        "Total_Member": 66,
        "Today_Absent": 59,
        "InDirect": 2,
        "Today_member": 7,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 100,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 160,
        "Hour_16": 0
    },
    {
        "line": "A_G12",
        "Total_Member": 69,
        "Today_Absent": 62,
        "InDirect": 4,
        "Today_member": 7,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 180,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 180,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A_G13",
        "Total_Member": 69,
        "Today_Absent": 63,
        "InDirect": 4,
        "Today_member": 6,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 200,
        "Hour_9": 200,
        "Hour_10": 200,
        "Hour_11": 200,
        "Hour_12": 0,
        "Hour_13": 200,
        "Hour_14": 200,
        "Hour_15": 200,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 413,
        "Today_Absent": 379,
        "InDirect": 22,
        "Today_member": 34,
        "CAPACITY": 10165,
        "TARGET": 1070,
        "Hour_8": 940,
        "Hour_9": 1000,
        "Hour_10": 970,
        "Hour_11": 1000,
        "Hour_12": 0,
        "Hour_13": 980,
        "Hour_14": 980,
        "Hour_15": 630,
        "Hour_16": 0
    },
    {
        "line": "A1_G01",
        "Total_Member": 66,
        "Today_Absent": 53,
        "InDirect": 4,
        "Today_member": 13,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G02",
        "Total_Member": 58,
        "Today_Absent": 50,
        "InDirect": 2,
        "Today_member": 8,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 170,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 160,
        "Hour_16": 0
    },
    {
        "line": "A1_G03",
        "Total_Member": 62,
        "Today_Absent": 54,
        "InDirect": 2,
        "Today_member": 8,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 0,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G04",
        "Total_Member": 64,
        "Today_Absent": 54,
        "InDirect": 2,
        "Today_member": 10,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 130,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 250,
        "Hour_14": 150,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G05",
        "Total_Member": 64,
        "Today_Absent": 54,
        "InDirect": 3,
        "Today_member": 10,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "A1_G06",
        "Total_Member": 70,
        "Today_Absent": 63,
        "InDirect": 2,
        "Today_member": 7,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 165,
        "Hour_9": 130,
        "Hour_10": 130,
        "Hour_11": 130,
        "Hour_12": 0,
        "Hour_13": 130,
        "Hour_14": 150,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 384,
        "Today_Absent": 328,
        "InDirect": 15,
        "Today_member": 56,
        "CAPACITY": 11210,
        "TARGET": 1180,
        "Hour_8": 755,
        "Hour_9": 930,
        "Hour_10": 920,
        "Hour_11": 920,
        "Hour_12": 0,
        "Hour_13": 1020,
        "Hour_14": 940,
        "Hour_15": 160,
        "Hour_16": 0
    },
    {
        "line": "B_M01",
        "Total_Member": 95,
        "Today_Absent": 86,
        "InDirect": 3,
        "Today_member": 9,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 170,
        "Hour_10": 170,
        "Hour_11": 170,
        "Hour_12": 0,
        "Hour_13": 170,
        "Hour_14": 170,
        "Hour_15": 170,
        "Hour_16": 0
    },
    {
        "line": "B_M02",
        "Total_Member": 113,
        "Today_Absent": 104,
        "InDirect": 0,
        "Today_member": 9,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 160,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M03",
        "Total_Member": 107,
        "Today_Absent": 90,
        "InDirect": 2,
        "Today_member": 17,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 80,
        "Hour_9": 80,
        "Hour_10": 80,
        "Hour_11": 80,
        "Hour_12": 0,
        "Hour_13": 80,
        "Hour_14": 80,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M05",
        "Total_Member": 106,
        "Today_Absent": 95,
        "InDirect": 6,
        "Today_member": 11,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 200,
        "Hour_9": 200,
        "Hour_10": 200,
        "Hour_11": 200,
        "Hour_12": 0,
        "Hour_13": 200,
        "Hour_14": 200,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "B_M06",
        "Total_Member": 107,
        "Today_Absent": 100,
        "InDirect": 3,
        "Today_member": 7,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 180,
        "Hour_14": 180,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 528,
        "Today_Absent": 475,
        "InDirect": 14,
        "Today_member": 53,
        "CAPACITY": 9120,
        "TARGET": 960,
        "Hour_8": 760,
        "Hour_9": 790,
        "Hour_10": 790,
        "Hour_11": 790,
        "Hour_12": 0,
        "Hour_13": 790,
        "Hour_14": 630,
        "Hour_15": 170,
        "Hour_16": 0
    },
    {
        "line": "B_G01",
        "Total_Member": 59,
        "Today_Absent": 56,
        "InDirect": 5,
        "Today_member": 3,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 160,
        "Hour_9": 170,
        "Hour_10": 170,
        "Hour_11": 170,
        "Hour_12": 0,
        "Hour_13": 170,
        "Hour_14": 170,
        "Hour_15": 170,
        "Hour_16": 0
    },
    {
        "line": "B_G02",
        "Total_Member": 73,
        "Today_Absent": 64,
        "InDirect": 2,
        "Today_member": 9,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 170,
        "Hour_9": 170,
        "Hour_10": 170,
        "Hour_11": 170,
        "Hour_12": 0,
        "Hour_13": 170,
        "Hour_14": 170,
        "Hour_15": 170,
        "Hour_16": 0
    },
    {
        "line": "B_G03",
        "Total_Member": 78,
        "Today_Absent": 75,
        "InDirect": 4,
        "Today_member": 3,
        "CAPACITY": 1520,
        "TARGET": 160,
        "Hour_8": 110,
        "Hour_9": 110,
        "Hour_10": 120,
        "Hour_11": 120,
        "Hour_12": 0,
        "Hour_13": 120,
        "Hour_14": 120,
        "Hour_15": 120,
        "Hour_16": 0
    },
    {
        "line": "B_G05",
        "Total_Member": 68,
        "Today_Absent": 62,
        "InDirect": 3,
        "Today_member": 6,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 200,
        "Hour_9": 200,
        "Hour_10": 200,
        "Hour_11": 200,
        "Hour_12": 0,
        "Hour_13": 200,
        "Hour_14": 200,
        "Hour_15": 200,
        "Hour_16": 0
    },
    {
        "line": "B_G06",
        "Total_Member": 55,
        "Today_Absent": 51,
        "InDirect": 5,
        "Today_member": 4,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 180,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 180,
        "Hour_14": 180,
        "Hour_15": 180,
        "Hour_16": 180
    },
    {
        "line": "Total",
        "Total_Member": 333,
        "Today_Absent": 308,
        "InDirect": 19,
        "Today_member": 25,
        "CAPACITY": 9120,
        "TARGET": 960,
        "Hour_8": 820,
        "Hour_9": 830,
        "Hour_10": 840,
        "Hour_11": 840,
        "Hour_12": 0,
        "Hour_13": 840,
        "Hour_14": 840,
        "Hour_15": 840,
        "Hour_16": 180
    },
    {
        "line": "C_M01",
        "Total_Member": 114,
        "Today_Absent": 102,
        "InDirect": 5,
        "Today_member": 12,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 135,
        "Hour_9": 145,
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
        "Today_Absent": 104,
        "InDirect": 5,
        "Today_member": 11,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 135,
        "Hour_9": 135,
        "Hour_10": 135,
        "Hour_11": 135,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M03",
        "Total_Member": 115,
        "Today_Absent": 98,
        "InDirect": 6,
        "Today_member": 17,
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
        "Today_Absent": 111,
        "InDirect": 3,
        "Today_member": 6,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 180,
        "Hour_9": 200,
        "Hour_10": 200,
        "Hour_11": 200,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_M05",
        "Total_Member": 111,
        "Today_Absent": 100,
        "InDirect": 3,
        "Today_member": 11,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 130,
        "Hour_9": 135,
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
        "Today_Absent": 100,
        "InDirect": 5,
        "Today_member": 14,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 130,
        "Hour_9": 130,
        "Hour_10": 130,
        "Hour_11": 70,
        "Hour_12": 0,
        "Hour_13": 0,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 686,
        "Today_Absent": 615,
        "InDirect": 27,
        "Today_member": 71,
        "CAPACITY": 11210,
        "TARGET": 1180,
        "Hour_8": 710,
        "Hour_9": 745,
        "Hour_10": 465,
        "Hour_11": 405,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 0,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G01",
        "Total_Member": 61,
        "Today_Absent": 56,
        "InDirect": 2,
        "Today_member": 5,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 150,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G02",
        "Total_Member": 64,
        "Today_Absent": 59,
        "InDirect": 2,
        "Today_member": 5,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 140,
        "Hour_9": 140,
        "Hour_10": 140,
        "Hour_11": 140,
        "Hour_12": 0,
        "Hour_13": 140,
        "Hour_14": 140,
        "Hour_15": 140,
        "Hour_16": 0
    },
    {
        "line": "C_G03",
        "Total_Member": 66,
        "Today_Absent": 60,
        "InDirect": 5,
        "Today_member": 6,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 180,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 180,
        "Hour_14": 180,
        "Hour_15": 180,
        "Hour_16": 0
    },
    {
        "line": "C_G04",
        "Total_Member": 64,
        "Today_Absent": 55,
        "InDirect": 2,
        "Today_member": 9,
        "CAPACITY": 2090,
        "TARGET": 220,
        "Hour_8": 180,
        "Hour_9": 180,
        "Hour_10": 180,
        "Hour_11": 180,
        "Hour_12": 0,
        "Hour_13": 180,
        "Hour_14": 180,
        "Hour_15": 180,
        "Hour_16": 0
    },
    {
        "line": "C_G05",
        "Total_Member": 64,
        "Today_Absent": 60,
        "InDirect": 3,
        "Today_member": 4,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 160,
        "Hour_11": 160,
        "Hour_12": 0,
        "Hour_13": 160,
        "Hour_14": 160,
        "Hour_15": 160,
        "Hour_16": 0
    },
    {
        "line": "C_G06",
        "Total_Member": 62,
        "Today_Absent": 57,
        "InDirect": 4,
        "Today_member": 5,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 150,
        "Hour_9": 160,
        "Hour_10": 165,
        "Hour_11": 165,
        "Hour_12": 0,
        "Hour_13": 165,
        "Hour_14": 165,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "C_G07",
        "Total_Member": 65,
        "Today_Absent": 62,
        "InDirect": 3,
        "Today_member": 3,
        "CAPACITY": 1900,
        "TARGET": 200,
        "Hour_8": 150,
        "Hour_9": 150,
        "Hour_10": 150,
        "Hour_11": 150,
        "Hour_12": 0,
        "Hour_13": 150,
        "Hour_14": 150,
        "Hour_15": 0,
        "Hour_16": 0
    },
    {
        "line": "Total",
        "Total_Member": 446,
        "Today_Absent": 409,
        "InDirect": 21,
        "Today_member": 37,
        "CAPACITY": 13110,
        "TARGET": 1380,
        "Hour_8": 1100,
        "Hour_9": 1110,
        "Hour_10": 1125,
        "Hour_11": 1125,
        "Hour_12": 0,
        "Hour_13": 1125,
        "Hour_14": 1125,
        "Hour_15": 660,
        "Hour_16": 0
    },
    {
        "line": "D1_M01",
        "Total_Member": 124,
        "Today_Absent": 115,
        "InDirect": 2,
        "Today_member": 9,
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
        "Total_Member": 112,
        "Today_Absent": 96,
        "InDirect": 3,
        "Today_member": 16,
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
        "Total_Member": 107,
        "Today_Absent": 99,
        "InDirect": 4,
        "Today_member": 8,
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
        "line": "D1_M04",
        "Total_Member": 120,
        "Today_Absent": 110,
        "InDirect": 3,
        "Today_member": 10,
        "CAPACITY": 1710,
        "TARGET": 180,
        "Hour_8": 155,
        "Hour_9": 156,
        "Hour_10": 156,
        "Hour_11": 157,
        "Hour_12": 0,
        "Hour_13": 158,
        "Hour_14": 157,
        "Hour_15": 157,
        "Hour_16": 157
    },
    {
        "line": "D1_M05",
        "Total_Member": 115,
        "Today_Absent": 109,
        "InDirect": 2,
        "Today_member": 6,
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
        "Total_Member": 99,
        "Today_Absent": 87,
        "InDirect": 4,
        "Today_member": 12,
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
        "Total_Member": 677,
        "Today_Absent": 616,
        "InDirect": 18,
        "Today_member": 61,
        "CAPACITY": 10640,
        "TARGET": 1120,
        "Hour_8": 155,
        "Hour_9": 156,
        "Hour_10": 156,
        "Hour_11": 157,
        "Hour_12": 0,
        "Hour_13": 158,
        "Hour_14": 157,
        "Hour_15": 157,
        "Hour_16": 157
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
  // useEffect(() => {
  //   // getAPIcheck();
    

  // }, []);
  // useEffect(() => {
  //   const rotateList = () => {
  //       setListHourlyOutput(prevList => {
  //           const newList = [...prevList];
  //           const first15 = newList.splice(0, 15); // Extracting the first 15 objects
  //           newList.push(...first15); // Appending the extracted objects to the end
  //           return newList;
  //       });
  //   };

  //   const interval = setInterval(() => {
  //       rotateList();
  //   }, 15000); // 15 seconds in milliseconds

//     return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
// }, []);
  return (
    <>
      <div className="   overflow-hidden" >
        <p className="text-center text-white text-4xl font-bold py-4">HOURLY OUT PUT - BY FLOOR {formattedDate}</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full w-full ">
          <div className="flex justify-center ">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                  <th className="text-sm text-blue-300 w-12 ">Line</th>
                  <th className="text-sm text-blue-300 w-12 ">Total Member</th>
                  <th className="text-sm text-blue-300 w-12 ">In Direct</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Member</th>
                  <th className="text-sm text-blue-300 w-12 ">Capacity</th>
                  <th className="text-sm text-blue-300 w-12 ">Target</th>
                  <th className="text-sm text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-sm text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-sm text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-sm text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-sm text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-sm text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-sm text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-sm text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-sm text-blue-300 w-12 ">15:30-16:30</th>
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
                        <td className={` text-sm ${ item.line === "Total" ? ' text-teal-400 ':' text-yellow-400 '} font-bold `}>
                            {item.line}
                          </td>
                          <td className=" text-sm text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className=" text-sm text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className=" text-sm text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className=" text-sm text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className=" text-sm text-green-400 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
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
                  <th className="text-sm text-blue-300 w-12 ">Line</th>
                  <th className="text-sm text-blue-300 w-12 ">Total Member</th>
                  <th className="text-sm text-blue-300 w-12 ">In Direct</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Member</th>
                  <th className="text-sm text-blue-300 w-12 ">Capacity</th>
                  <th className="text-sm text-blue-300 w-12 ">Target</th>
                  <th className="text-sm text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-sm text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-sm text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-sm text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-sm text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-sm text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-sm text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-sm text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-sm text-blue-300 w-12 ">15:30-16:30</th>
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
                          <td className={` text-sm ${ item.line === "Total" ? ' text-teal-400 ':' text-yellow-400 '} font-bold `}>
                          {item.line}
                          </td>
                          <td className=" text-sm text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className=" text-sm text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className=" text-sm text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className=" text-sm text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className=" text-sm text-green-400 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
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
