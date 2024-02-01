import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>찾으시는 페이지를 불러올 수 없습니다.</h1>
      <p>
        <a href="/">처음 페이지로 돌아가세요.</a>
      </p>
    </div>
  );
}
