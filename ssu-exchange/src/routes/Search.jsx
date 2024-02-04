import "../index.scss";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import School from "../components/School";

export default function Search() {
  const [universities, setUniversities] = useState(false);

  function getUniversities() {
    fetch("http://localhost:3001")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        setUniversities(JSON.parse(data));
        console.log(JSON.parse(data));
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
      <School />
      <div
        style={{
          minHeight: 100,
          minWidth: "100vw",
          border: "1px solid #2AC4C4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {Array.isArray(universities) ? (
          universities.map((univ, index) => {
            <div key={index}>
              <h1>{univ.name_eng}</h1>;
            </div>;
          })
        ) : (
          <div>
            <p>No Univ</p>
          </div>
        )}
      </div>
    </div>
  );
}
