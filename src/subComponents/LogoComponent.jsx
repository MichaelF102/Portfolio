import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const LogoContainer = styled.div`
  display: inline-block;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  ${mediaQueries(40)`
      left: 1rem;
      top: 2rem;
  `};
`;

const LogoImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2.5px solid ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.15) rotate(12deg);
  }

  ${mediaQueries(40)`
      width: 2.5rem;
      height: 2.5rem;
  `};
`;

const LogoComponent = (props) => {
  return (
    <LogoContainer>
      <a href={`${import.meta.env.BASE_URL}`}>
        <LogoImage src={`${import.meta.env.BASE_URL}favicon.ico`} alt="Logo" color={props.theme} />
      </a>
    </LogoContainer>
  );
};

export default LogoComponent;
