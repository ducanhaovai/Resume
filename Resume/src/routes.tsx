import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Mainlayout from "./components/layouts/Mainlayout";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";
import Portfolio from "./page/Portfolio";
import Weather from "./page/Weather";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Mainlayout>
            <Home />
          </Mainlayout>
        }
      />
      <Route
        path="/"
        element={
          <Mainlayout>
            <Home />
            <About />
            <Service />
            <Contact />
            <Portfolio />
            <Weather />
          </Mainlayout>
        }
      />
      <Route
        path="/abuot"
        element={
          <Mainlayout>
            <About />
          </Mainlayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
