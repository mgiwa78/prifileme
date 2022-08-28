import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLanding from "./pages/landing/landing.component";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingContainer } from "./pages/landing/landing.styles";
import Nav from "./components/navigation/nav.compoents";
import SignInSignUp from "./pages/signin-signup/signin-signup.component";
import SignIn from "./components/signin/signin.component";
import SignUp from "./components/signup/signup.component";
function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xs"]}
      minBreakpoint="xs"
    >
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes>
            <Route index element={<AppLanding />} />
            <Route path="auth" element={<SignInSignUp />}>
              <Route index element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </div>{" "}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
