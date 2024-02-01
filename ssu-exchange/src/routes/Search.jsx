import "../index.scss";
import Title from "../components/Title";
import School from "../components/School";

export default function Search() {
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
    </div>
  );
}
