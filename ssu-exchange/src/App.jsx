import { useState } from "react";
import sample_data from "./sample_data.json";

function App() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };
  return (
    <>
      <input onChange={handleScoreChange} placeholder={score}></input>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <h3 style={{ maxWidth: 300, minWidth: 300 }}>대학명(국문)</h3>
          <p style={{ maxWidth: 300, minWidth: 300 }}>프로그램구분</p>
          <p style={{ maxWidth: 300, minWidth: 300 }}>기관</p>
          <p style={{ maxWidth: 300, minWidth: 300 }}>일련번호</p>
        </div>
        {sample_data.map((program, index) =>
          program["TOEFL"] <= score ? (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <h3 style={{ maxWidth: 300, minWidth: 300 }}>
                {program["대학명(국문)"]}
              </h3>
              <p style={{ maxWidth: 300, minWidth: 300 }}>
                {program["프로그램구분"]}
              </p>
              <p style={{ maxWidth: 300, minWidth: 300 }}>{program["기관"]}</p>
              <p style={{ maxWidth: 300, minWidth: 300 }}>
                {program["일련번호"]}
              </p>
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </>
  );
}

export default App;
