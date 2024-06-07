import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { makeStyles } from "@mui/styles";
import { LIGHT_GREEN } from "./shared/constants/Colors";

const useStyles = makeStyles({
  app: {
    display: "flex",
    height: "100vh",
  },
  nav: {
    width: "200px",
    position: "fixed",
    height: "100%",
    backgroundColor: LIGHT_GREEN,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  conteudoPrincipal: {
    marginLeft: "300px",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div id="app" className={classes.app}>
      <nav id="navbar" className={classes.nav}>
        <NavBar />
      </nav>
      <main id="conteudo-principal" className={classes.conteudoPrincipal}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
