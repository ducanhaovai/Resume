import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Mainlayout from "./components/layouts/Mainlayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Mainlayout>
            <Home />
          </Mainlayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
