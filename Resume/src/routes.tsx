import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Mainlayout from "./components/layouts/Mainlayout";
import About from "./page/About";

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
            <About  />
          </Mainlayout>
        }
      />
      <Route
        path="/abuot"
        element={
          <Mainlayout>
            <About/>
          </Mainlayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
