import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import Loading from "./subComponents/Loading";

// Components
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const CertificationPage = lazy(() => import("./components/CertificationPage"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <SoundBar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />

              <Route path="/about" element={<AboutPage />} />

              <Route path="/certifications" element={<CertificationPage />} />

              <Route path="/projects" element={<ProjectPage />} />

              <Route path="/skillsexperience" element={<MySkillsPage />} />

              <Route path="*" element={<Main />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
