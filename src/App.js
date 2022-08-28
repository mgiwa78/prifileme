import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLanding from "./pages/landing/landing.component";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingContainer } from "./pages/landing/landing.styles";
import Nav from "./components/navigation/nav.compoents";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xs"]}
        minBreakpoint="xs"
      >
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<AppLanding />}></Route>
            <Route path="signIn" element={<SignInSignUp />}></Route>
          </Routes>
        </div>{" "}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
