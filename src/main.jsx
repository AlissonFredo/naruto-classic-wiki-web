import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routers from "./routes/index.jsx";
import Container from "./components/Container/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Routers />
    </Container>
  </StrictMode>
);
