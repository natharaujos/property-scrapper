import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div id="error-page">
      <h1>Ooops</h1>
      <p>Sorry!! Um erro inesperado ocorreu.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
