import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLanding from "./pages/landing/landing.component";
import ThemeProvider from "react-bootstrap/ThemeProvider";
function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xs"]}
      minBreakpoint="xs"
    >
      <div className="App">
        <AppLanding />
      </div>{" "}
    </ThemeProvider>
  );
}

export default App;
