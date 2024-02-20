import "../styles/components_basic.scss";
import "../styles/school.scss";

export default function School({ data, index }) {
  return (
    <div className="block" id="school">
      <p id="school-detail">
        {data.program_category} <br></br>- {data.category}
      </p>
      <p id="school-detail">
        {data.city}, {data.country}
      </p>
      <p id="school-detail">{data.name_kor}</p>
      <p id="school-detail">{data.toefl_ibt}</p>
    </div>
  );
}
