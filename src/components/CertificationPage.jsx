import styled from "styled-components";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import { Certifications } from "./CertificationData";
import CertificationComponent from "./CertificationComponent";
import Loading from "../subComponents/Loading";
import { lightTheme, mediaQueries } from "./Themes";
import { pageContentInset } from "../layout/pageInsets";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const PageNav = lazy(() => import("../subComponents/PageNav"));

const MainContainer = styled(motion.div)`
  min-height: 100vh;
  min-height: 100dvh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;

  ${mediaQueries(50)`
    background-attachment: scroll;
  `};
`;

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  background-color: rgba(252, 246, 244, 0.82);
  position: relative;
  ${pageContentInset}
`;

const ContentArea = styled.main`
  position: relative;
  z-index: 3;
  width: min(100%, 72rem);
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const BackgroundTitle = styled.span`
  position: absolute;
  top: calc(var(--page-inset-top) + 0.25rem);
  left: var(--page-inset-left);
  right: var(--page-inset-right);
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: clamp(2.25rem, 8vw, 5rem);
  font-weight: 600;
  color: rgba(0, 0, 0, 0.06);
  pointer-events: none;
  z-index: 1;
  line-height: 1.1;
  user-select: none;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.5rem, 1fr));
  gap: 1.75rem;
  align-items: stretch;
  width: 100%;

  ${mediaQueries(50)`
    grid-template-columns: 1fr;
    max-width: 22rem;
    margin: 0 auto;
  `};
`;

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const CertificationPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <MainContainer
          key="certifications"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <Overlay>
            <BackgroundTitle>CERTIFICATIONS</BackgroundTitle>
            <LogoComponent theme="light" />
            <PowerButton />
            <SocialIcons theme="light" />
            <PageNav variant="light" />

            <ContentArea>
              <Grid
                variants={listVariants}
                initial="hidden"
                animate="show"
                aria-label="Certifications list"
              >
                {Certifications.map((certification) => (
                  <CertificationComponent
                    key={certification.id}
                    certification={certification}
                  />
                ))}
              </Grid>
            </ContentArea>
          </Overlay>
        </MainContainer>
      </Suspense>
    </ThemeProvider>
  );
};

export default CertificationPage;
