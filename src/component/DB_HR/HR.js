import { useEffect, useState } from "react";
import hinhnen from "../../assets/image/New_LHG.png";
// import hinhhr from '../../assets/img/MES_Sky_blue.png'
import "./HR.css";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import ModalBuilding from "./modalBuilding";
import { useTranslation } from "react-i18next";
function HR() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [detail, setDetail] = useState([]);
  const [detailName, setDetailname] = useState("");
  const {t} = useTranslation();
  const openModalBuilding = (building) => {
    getAPIdetail(building);
    setDetailname(building);
    setOpenModal(true);
  };

  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/Get_Data_HR")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  };
  const getAPIdetail = async (building) => {
    await axios
      .get(BaseAPI + "/Get_Data_HR_Detail?building=" + building)
      .then((response) => {
        setDetail(response.data.Manpower_Build_Lean_Detail);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);

  return (
    <div className="hinhnen w-screen h-screen absolute left-0 top-0 overflow-hidden">
      <ModalBuilding isOpen={openModal}>
        <div>
          <div className="flex relative justify-end p-2  ">
            <button
              className="text-2xl rounded-full right-0 bg-gray-200 px-2.5 "
              onClick={() => setOpenModal(false)}
            >
              X
            </button>
          </div>
          <p className="text-white text-center font-bold text-4xl py-3 -mt-12">
            {detailName}
          </p>
          <div className="flex justify-center ">
            <table className="table-detail w-full border-separate border-spacing-x-0.5 border-spacing-y-0.5">
              <tbody>
                {detail &&
                  detail.map((item, index) => {
                    return (
                      <tr>
                        <td className="text-blue-300">{item.Name}</td>
                        <td className="text-blue-300">
                          {item.ExpectedAttendence + item.Absence}
                        </td>
                        <td className="text-blue-300">{item.LeaveFactory}</td>
                        <td className="text-blue-300">{item.Absence}</td>
                        <td className="text-blue-300">{item.MaternityLeave}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </ModalBuilding>
      <img
        src={hinhnen}
        alt=""
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          marginTop: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          zIndex: 19,
        }}
      >
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <span
              style={{
                fontSize: "70px",
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "-10px",
              }}
            >
              {t('hr.title')}
            </span>
          </div>
        </div>
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            zIndex: 9,
            opacity: 0.7,
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", width: "70%", gap: 50 }}>
            <div style={{ flex: 1 }} onClick={() => openModalBuilding("D")}>
              <CardBuilding items={data && data?.ManBuildingD} />
            </div>

            <div style={{ flex: 1 }} onClick={() => openModalBuilding("R2")}>
              <CardBuilding items={data && data?.ManBuildingR2} />
            </div>

            <div style={{ flex: 1 }} onClick={() => openModalBuilding("R1")}>
              <CardBuilding items={data && data?.ManBuildingR1} />
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 2.5,
            display: "flex",
            justifyContent: "center",
            zIndex: 9,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 50,
              flex: 1,
              paddingRight: "50px",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 0.75 }}></div>
            <div style={{ flex: 1 }} onClick={() => openModalBuilding("C")}>
              <CardBuilding items={data && data?.ManBuildingC} />
            </div>
            <div style={{ flex: 1 }} onClick={() => openModalBuilding("B")}>
              <CardBuilding items={data && data?.ManBuildingB} />
            </div>
            <div style={{ flex: 1 }} onClick={() => openModalBuilding("A")}>
              <CardBuilding items={data && data?.ManBuildingA} />
            </div>
          </div>
        </div>

        <div style={{ flex: 2.5, display: "flex" }}>
          <div style={{ flex: 1, display: "flex" }}>
            <div
              style={{
                flex: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <table className="table-left  border-separate border-spacing-x-1.5 border-spacing-y-0.5">
                <tbody>
                  <tr>
                    <td className="w-3/12 column1 green">
                    {t('hr.Expected_Attendence')}
                      {/* Expected Attendence */}
                    </td>
                    <td className="w-2/12 column2 yellowFLex">
                      {data && data?.ManpowerTotal?.ExpectedAttendence}
                    </td>
                    <td className="w-7/12 column3 orange  ">
                      <div className="persent ">
                        {(Number(data?.ManpowerTotal?.ExpectedAttendence) /
                          Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.ExpectedAttendence) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                    {t('hr.Actual_Attendence')}

                      {/* Actual Attendence */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.ActualAttendence}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.ActualAttendence) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.ActualAttendence) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                    {t('hr.Leave_Factory')}

                      {/* Leave Factory */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.LeaveFactory}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.LeaveFactory) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.LeaveFactory) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                    {t('hr.Absence')}

                      {/* Absence */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.Absence}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.Absence) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.Absence) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                      {t('hr.Maternity_Leave')}
                      {/* Maternity Leave */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.MaternityLeave}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.MaternityLeave) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.MaternityLeave) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                      {t('hr.Accident_Month')}
                      {/* Accident Month */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.Accident_Month}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.Accident_Month) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.Accident_Month) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="column1 green">
                      {t('hr.Accident_Year')}
                      {/* Accident Year */}
                    </td>
                    <td className="column2 yellowFLex">
                      {data && data?.ManpowerTotal?.AccidentYear}
                    </td>
                    <td className="column3 orange">
                      <div className="persent ">
                        {(
                          (Number(data?.ManpowerTotal?.AccidentYear) /
                            Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div
                        style={{
                          background: "#397CB4",
                          width: `${(
                            (Number(data?.ManpowerTotal?.AccidentYear) /
                              Number(data?.ManpowerTotal?.ExpectedAttendence)) *
                            100
                          ).toFixed(2)}%`,
                        }}
                      >
                        &emsp;
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{
                flex: 2,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <table className="table-right border-separate">
                <thead>
                  <tr>
                    <td
                      colSpan={2}
                      className="orange grey text-center font-bold"
                    >
                      {t('hr.Last_Months')}
                      {/* Last Months */}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/2 green grey">
                      {t('hr.Expected_Attendence')}
                      {/* Expected Attendence */}
                    </td>
                    <td className="pr-2 w-1/2 yellowFLex grey">
                      {data && data?.LastMonth?.ExpectedAttendence}
                    </td>
                  </tr>

                  <tr>
                    <td className="w-1/2 green grey">
                      {t('hr.Turnover_Rate')}
                      {/* Turnover Rate */}
                    </td>
                    <td className="pr-2 w-1/2 yellowFLex grey">
                      {data && data?.LastMonth?.TurnoverRate}
                    </td>
                  </tr>

                  <tr>
                    <td className="w-1/2 green grey">
                      {t('hr.Maternity_Leave')}
                      {/* Maternity Leave */}
                    </td>
                    <td className="pr-2 w-1/2 yellowFLex grey">
                      {data && data?.LastMonth?.MaternityLeave}
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-right col  border-separate">
                <thead>
                  <tr>
                    <td
                      colSpan={2}
                      className="orange grey  text-center font-bold"
                    >
                      {t('hr.Over_Time_Today')}
                      {/* Over Time Today */}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="green grey w-1/2">
                    {t('hr.Quantity')}
                      {/* Quantity */}
                    </td>
                    <td className="pr-2 yellowFLex grey w-1/2">
                      {data && data?.OverTime?.Qty_Overtime}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CardBuilding = ({ items }) => {
  const {t} = useTranslation();

  return (
    <>
      <div className="flexDuy">
        <div className="blue content-left" style={{ textAlign: "center" }}>
          {" "}
          {items && items?.Name}{t('hr.building')} 
        </div>
      </div>

      <div className="flexDuy">
        <div className="blue content-left">
          {t('hr.Expected_Attendence')}
          {/* Expected Attendence */}
        </div>
        <div className="yellowFLex content-left">
          {items && items?.ExpectedAttendence}
        </div>
      </div>

      <div className="flexDuy">
        <div className="blue content-left">
          {t('hr.Leave_Factory')}
          {/* Leave Factory */}
        </div>
        <div className="yellowFLex content-left">
          {items && items?.LeaveFactory}
        </div>
      </div>

      <div className="flexDuy">
        <div className="blue content-left">
        {t('hr.Absence')}
          {/* Absence */}
        </div>
        <div className="yellowFLex content-left">{items && items?.Absence}</div>
      </div>

      <div className="flexDuy">
        <div className="blue content-left">
          {t('hr.Maternity_Leave')}
          {/* Maternity Leave */}
        </div>
        <div className="yellowFLex content-left">
          {items && items?.MaternityLeave}
        </div>
      </div>

      <div className="flexDuy">
        <div className="blue content-left">
          {t('hr.Accident')}
          {/* Accident */}
        </div>
        <div className="yellowFLex content-left">
          {items && items?.Accident}
        </div>
      </div>
    </>
  );
};

export default HR;
