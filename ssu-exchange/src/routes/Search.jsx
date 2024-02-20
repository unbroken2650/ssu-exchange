import { useState, useEffect } from "react";
import Title from "../components/Title";
import School from "../components/School";
import SampleData from "../data/data.json";
import "../index.scss";
import "../styles/components_basic.scss";

export default function Search() {
  const [universities, setUniversities] = useState([]);
  const [isUnivLoading, setIsUnivLoading] = useState(true);

  async function getUniversities() {
    // await fetch("http://localhost:3001")
    //   .then((response) => {
    //     return response.text();
    //   })
    //   .then((data) => {
    //     const d = JSON.parse(data);
    //     setUniversities(d);
    //     console.log(d);
    //     setIsUnivLoading(false);
    //     console.log("Univ Loaded");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log(SampleData);
    setIsUnivLoading(false);
  }

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <div className="container">
      <Title />
      <h2
        style={{
          minHeight: 100,
          minWidth: "100vw",
          border: "1px solid #2AC4C4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        필터
      </h2>
      {isUnivLoading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            minHeight: 100,
            minWidth: "100vw",
            border: "1px solid #2AC4C4",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div className="block" id="school-top">
            <p id="school-detail">프로그램</p>
            <p id="school-detail">지역</p>
            <p id="school-detail">학교명</p>
            <p id="school-detail">어학 성적</p>
          </div>
          {SampleData.map((univ, index) =>
            index ? <School key={index} data={univ} /> : <></>
          )}
        </div>
      )}
    </div>
  );
}
