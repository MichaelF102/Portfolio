import { useId } from "react";
import styled from "styled-components";
import Particles from "@tsparticles/react";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  canvas {
    width: 100% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
`;

const ParticlesComponent = (props) => {
  const id = useId().replace(/:/g, "");

  return (
    <Box>
      <Particles
        id={`tsparticles-${props.theme}-${id}`}
        style={{ width: "100%", height: "100%" }}
        options={props.theme === "light" ? ConfigLight : ConfigDark}
      />
    </Box>
  );
};

export default ParticlesComponent;
