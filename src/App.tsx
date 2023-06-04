import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainBars from "./app/containers/mainBars";
import HomePage from "./app/containers/homePage";
import Vessels from "./app/containers/vessels";
import SignIn from "./app/containers/signIn";
import SignUp from "./app/containers/signUp";
import YourAccount from "./app/containers/yourAccount/YourAccount";
import Vessel from "./app/components/Common/Vessel";
import Error from "./app/containers/error";
import { theme } from "./theme/theme.js";
import { ThemeProvider } from "@mui/material";

function App() {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
  console.warn = () => {};

  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<MainBars />}>
              <Route path="home" element={<HomePage />} />

              <Route path="vessels" element={<Vessels />} />

              <Route path="your-account" element={<YourAccount />} />

              <Route path="your-account/:id/:owner" element={<Vessel />} />

              <Route path="sign-in" element={<SignIn />} />

              <Route path="sign-up" element={<SignUp />} />

              <Route path="/:id" element={<Vessel />} />

              <Route path="error" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
