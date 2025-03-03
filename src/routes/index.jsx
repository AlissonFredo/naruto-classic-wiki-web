import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Details from "../pages/Details";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
