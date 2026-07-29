import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const PageNav = lazy(() => import("../subComponents/PageNav"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  height: 100dvh;
  position: relative;
  overflow: hidden;
`;

const ContentArea = styled.div`
  position: absolute;
  top: var(--page-inset-top);
  right: var(--page-inset-right);
  bottom: var(--page-inset-bottom);
  left: var(--page-inset-left);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(15px) translateX(8px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: min(50rem, 85%);
  max-height: 80vh;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 3;
  pointer-events: auto;
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    max-height: 75vh;
  }
`;

const PremiumCard = styled(motion.article)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  padding: 2rem;
  font-family: "Ubuntu Mono", monospace;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.85);
  }

  h2 {
    font-size: 1.5rem; /* ~24-26px category */
    margin: 0;
    font-family: "Karla", sans-serif;
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.text};
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1.06rem; /* 17px Body */
    line-height: 1.6;
    margin: 0;
  }
  
  ul {
    margin: 0;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.06rem;
  }
`;

const FullCard = styled(PremiumCard)`
  grid-column: span 2;
  @media (max-width: 50em) {
    grid-column: span 1;
  }
`;

const InterestTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const InterestTag = styled.span`
  font-size: 0.93rem; /* 15px Tags */
  font-weight: 700;
  border: 2px solid ${(props) => props.theme.text};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  background-color: transparent;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transform: translateY(-2px);
  }
`;

const QuoteBox = styled(motion.div)`
  grid-column: span 2;
  text-align: center;
  font-family: "Ubuntu Mono", monospace;
  font-size: 1.15rem;
  font-style: italic;
  color: ${(props) => props.theme.text};
  padding: 1.5rem;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  margin-top: 1rem;
  line-height: 1.5;
  box-sizing: border-box;
  
  @media (max-width: 50em) {
    grid-column: span 1;
  }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: min(16vw, 11rem);
  pointer-events: none;
  animation: ${float} 4s ease infinite;
  z-index: 4;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  ${mediaQueries(50)`
    width: min(22vw, 9rem);
    top: -0.5rem;
    right: 0.25rem;
  `};

  ${mediaQueries(40)`
    display: none;
  `};
`;

const BackgroundTitle = styled.span`
  position: absolute;
  top: calc(var(--page-inset-top) + 0.5rem);
  left: var(--page-inset-left);
  right: var(--page-inset-right);
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: clamp(3rem, 12vw, 6.5rem);
  font-weight: 600;
  color: rgba(252, 246, 244, 0.07);
  pointer-events: none;
  z-index: 1;
  line-height: 1;
  user-select: none;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <BackgroundTitle>ABOUT</BackgroundTitle>
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="dark" />
          <PageNav variant="dark" />

          <ContentArea>
            <SpaceMan
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 1.2, delay: 0.6 },
              }}
            >
              <img src={astronaut} alt="" aria-hidden="true" />
            </SpaceMan>

            <AboutGrid>
              <FullCard
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
              >
                <h2>About Me</h2>
                <p>
                  Passionate about building data-intensive applications and quantitative solutions for financial markets. I am currently pursuing an M.Sc. in Big Data Analytics at St. Xavier's College, Mumbai, where I combine data engineering, machine learning, and quantitative finance to solve real-world analytical problems.
                </p>
                <p>
                  My interests lie at the intersection of Quantitative Development, Data Engineering, Financial Analytics, and Algorithmic Trading. I enjoy designing scalable ETL pipelines, developing data-driven applications, and building quantitative models that transform complex datasets into actionable insights.
                </p>
                <p>
                  Beyond building data pipelines and analytical applications, I am passionate about sharing knowledge through technical writing, educational content, and hands-on projects that make data engineering and quantitative finance more accessible to the community.
                </p>
                <p>
                  I Have Interests in Areas Of Psychology, Finance, Technology, Geopolitics, AI and Quantum Computing
                </p>

                <p>
                  I believe in continuous learning, open collaboration, and leveraging technology to create impactful, data-driven solutions.
                </p>
              </FullCard>

              <PremiumCard
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
              >
                <h2>🎓 Education</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem" }}>M.Sc. Big Data Analytics</strong>
                    <span>St. Xavier's College, Mumbai</span>
                    <div style={{ opacity: 0.75, fontSize: "0.9rem", fontStyle: "italic" }}>June 2025 – April 2027</div>
                  </div>
                  <div style={{ borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1rem" }}>
                    <strong style={{ display: "block", fontSize: "1.1rem" }}>B.Sc. Information Technology</strong>
                    <span>University of Mumbai</span>
                    <div style={{ opacity: 0.75, fontSize: "0.9rem", fontStyle: "italic" }}>June 2022 – April 2025</div>
                  </div>
                </div>
              </PremiumCard>

              <PremiumCard
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
              >
                <h2>🚀 Extracurricular Activities</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <strong style={{ display: "block", fontSize: "1.1rem" }}>SXC FinCell</strong>
                    <span style={{ fontSize: "0.95rem", opacity: 0.85 }}>Quantitative Analyst (2025 – Present)</span>
                    <ul style={{ marginTop: "0.4rem" }}>
                      <li>Developed quantitative finance projects</li>
                      <li>Built financial analytics applications</li>
                    </ul>
                  </div>
                  <div style={{ borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1rem" }}>
                    <strong style={{ display: "block", fontSize: "1.1rem" }}>AWS Club</strong>
                    <ul style={{ marginTop: "0.4rem" }}>
                      <li>Developed cloud-based AWS projects</li>
                      <li>Explored cloud architecture and deployment</li>
                    </ul>
                  </div>
                </div>
              </PremiumCard>

              <FullCard
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
              >
                <h2>💼 Career Interests</h2>
                <InterestTags>
                  <InterestTag>Quant Development</InterestTag>
                  <InterestTag>Data Engineering</InterestTag>
                  <InterestTag>Machine Learning</InterestTag>
                  <InterestTag>Financial Analytics</InterestTag>
                  <InterestTag>Algorithmic Trading</InterestTag>
                  <InterestTag>Cloud Computing</InterestTag>
                </InterestTags>
              </FullCard>

              <QuoteBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1, delay: 0.8 } }}
              >
                "I enjoy solving complex financial problems by combining quantitative methods, scalable data engineering, and software development."
              </QuoteBox>
            </AboutGrid>
          </ContentArea>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
