import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Container = styled.nav`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

const sideLinkStyles = css`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.$color};
  text-decoration: none;
  pointer-events: auto;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  line-height: 1;
  white-space: nowrap;
  /* Same rotation on both sides — read bottom → top along the edge */
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: center center;

  ${mediaQueries(50)`
    font-size: 1rem;
    text-shadow: 0 0 4px #000;
  `};
`;

const SideLinkLeft = styled(NavLink)`
  ${sideLinkStyles}
  left: 1rem;

  ${mediaQueries(40)`
    left: 0.75rem;
  `};
`;

const SideLinkRight = styled(NavLink)`
  ${sideLinkStyles}
  right: 1rem;

  ${mediaQueries(40)`
    right: 0.75rem;
  `};
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: var(--page-inset-left);
  right: var(--page-inset-right);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  pointer-events: none;
  gap: 1rem;
`;

const BottomLink = styled(NavLink)`
  color: ${(p) => p.$color};
  text-decoration: none;
  pointer-events: auto;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.15rem;
  text-align: center;

  ${mediaQueries(50)`
    font-size: 1rem;
  `};

  ${mediaQueries(30)`
    font-size: 0.9rem;
  `};
`;

const PageNav = ({ variant = "light" }) => {
  const { pathname } = useLocation();
  const color = variant === "dark" ? DarkTheme.text : DarkTheme.body;

  const isAbout = pathname.startsWith("/about");
  const isSkills = pathname.startsWith("/skillsexperience");
  const isProjects = pathname.startsWith("/projects");
  const isCerts = pathname.startsWith("/certifications");

  return (
    <Container aria-label="Page navigation">
      {!isProjects && (
        <SideLinkLeft to="/projects" $color={color}>
          Projects
        </SideLinkLeft>
      )}
      {!isCerts && (
        <SideLinkRight to="/certifications" $color={color}>
          Certifications
        </SideLinkRight>
      )}
      <BottomBar>
        {!isAbout && (
          <BottomLink to="/about" $color={color}>
            About
          </BottomLink>
        )}
        {!isSkills && (
          <BottomLink to="/skillsexperience" $color={color}>
            Skills & Experience
          </BottomLink>
        )}
      </BottomBar>
    </Container>
  );
};

export default PageNav;
