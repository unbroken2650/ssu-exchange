import "../index.scss";
import Title from "../components/Title";

export default function Root() {
  return (
    <div className="container">
      <Title />
      <a href="/search">
        <h2>학교 검색하기</h2>
      </a>
    </div>
  );
}
