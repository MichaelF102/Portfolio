import App from "./App";
import "normalize.css";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ParticlesProvider } from "@tsparticles/react";
import { initParticles } from "./particlesInit";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <HashRouter>
    <ParticlesProvider init={initParticles}>
      <App />
    </ParticlesProvider>
  </HashRouter>
);
