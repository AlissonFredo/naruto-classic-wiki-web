import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import Details from "../pages/Details";
import Villages from "../pages/Villages";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Details />} />
        <Route path="/villages" element={<Villages />} />
        <Route path="/villages/:id" element={<Details type="villages" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
