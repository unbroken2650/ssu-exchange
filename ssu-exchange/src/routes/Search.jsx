import "../index.scss";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import School from "../components/School";

export default function Search() {
  const [universities, setUniversities] = useState([]);
  const [isUnivLoading, setIsUnivLoading] = useState(true);

  async function getUniversities() {
    await fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const d = JSON.parse(data);
        setUniversities(d);
        console.log(d);
        setIsUnivLoading(false);
        console.log("Univ Loaded");
      });
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
        <p>No Univ</p>
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
          {universities.map((univ, index) => (
            <p key={index} style={{ fontSize: "5" }}>
              {univ.name_eng}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
