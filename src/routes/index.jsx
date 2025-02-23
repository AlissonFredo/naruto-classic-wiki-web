import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Characters from "../pages/Characters";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
