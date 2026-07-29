import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { YinYang } from "./AllSvgs";
import { Project } from "./ProjectData";
import { DarkTheme, mediaQueries } from "./Themes";
import Card from "../subComponents/Card";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const PageNav = lazy(() => import("../subComponents/PageNav"));

const Page = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`;

const ScrollSpacer = styled.div`
  pointer-events: none;
`;

const ProjectsViewport = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  padding: var(--page-inset-top) var(--page-inset-right)
    var(--page-inset-bottom) var(--page-inset-left);
  box-sizing: border-box;
  pointer-events: none;
  z-index: 2;
`;

const Scroller = styled.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Track = styled(motion.ul)`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0 0 0 0;
  pointer-events: auto;
  will-change: transform;
  width: max-content;

  ${mediaQueries(50)`
    gap: 2rem;
  `};

  ${mediaQueries(25)`
    gap: 1.5rem;
  `};
`;

const ScrollHint = styled.p`
  position: fixed;
  left: var(--page-inset-left);
  bottom: calc(var(--page-inset-bottom) + 0.25rem);
  font-family: "Karla", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(252, 246, 244, 0.45);
  z-index: 2;
  pointer-events: none;
`;

const BackgroundTitle = styled.span`
  position: fixed;
  top: calc(var(--page-inset-top) + 1rem);
  left: var(--page-inset-left);
  right: var(--page-inset-right);
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 600;
  color: rgba(252, 246, 244, 0.06);
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
  letter-spacing: 0.02em;
`;

const Rotate = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: calc(var(--page-inset-right) + 0.25rem);
  bottom: calc(var(--page-inset-bottom) + 0.25rem);
  width: 4.5rem;
  height: 4.5rem;
  z-index: 2;
  pointer-events: none;

  ${mediaQueries(40)`
    width: 3.5rem;
    height: 3.5rem;
    svg {
      width: 3.5rem;
      height: 3.5rem;
    }
  `};
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const END_PADDING_PX = 48;

const ProjectPage = () => {
  const trackRef = useRef(null);
  const scrollerRef = useRef(null);
  const yinyangRef = useRef(null);
  const spacerRef = useRef(null);
  const maxTranslateRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const scroller = scrollerRef.current;
    const yinyang = yinyangRef.current;
    const spacer = spacerRef.current;
    if (!track || !scroller) return;

    const measureMaxTranslate = () => {
      track.style.transform = "translateX(0px)";

      const viewWidth = scroller.clientWidth;
      const scrollBased = Math.max(0, track.scrollWidth - viewWidth + END_PADDING_PX);

      const lastCard = track.lastElementChild;
      let rectBased = scrollBased;
      if (lastCard) {
        const scrollerRect = scroller.getBoundingClientRect();
        const lastRect = lastCard.getBoundingClientRect();
        rectBased = Math.max(
          scrollBased,
          lastRect.right - scrollerRect.right + END_PADDING_PX
        );
      }

      maxTranslateRef.current = rectBased;
      return rectBased;
    };

    const applyLayout = () => {
      const maxTranslate = measureMaxTranslate();

      if (spacer) {
        spacer.style.height = `${maxTranslate}px`;
      }

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;

      track.style.transform = `translateX(${-progress * maxTranslate}px)`;

      if (yinyang) {
        yinyang.style.transform = `rotate(${-window.scrollY * 0.4}deg)`;
      }
    };

    const onScroll = () => {
      const maxTranslate = maxTranslateRef.current;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0;

      track.style.transform = `translateX(${-progress * maxTranslate}px)`;

      if (yinyang) {
        yinyang.style.transform = `rotate(${-window.scrollY * 0.4}deg)`;
      }
    };

    const scheduleLayout = () => {
      requestAnimationFrame(() => {
        applyLayout();
        requestAnimationFrame(onScroll);
      });
    };

    scheduleLayout();

    const resizeObserver = new ResizeObserver(scheduleLayout);
    resizeObserver.observe(track);
    resizeObserver.observe(scroller);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", scheduleLayout);

    const remeasureTimer = setTimeout(scheduleLayout, 800);

    return () => {
      clearTimeout(remeasureTimer);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", scheduleLayout);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Page
        key="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <BackgroundTitle>PROJECTS</BackgroundTitle>

        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <PageNav variant="dark" />

        <ProjectsViewport>
          <Scroller ref={scrollerRef}>
            <Suspense fallback={<Loading />}>
              <Track
                ref={trackRef}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {Project.map((project) => (
                  <Card key={project.id} data={project} />
                ))}
              </Track>
            </Suspense>
          </Scroller>
        </ProjectsViewport>

        <ScrollHint>Scroll to explore projects</ScrollHint>

        <Rotate ref={yinyangRef}>
          <YinYang width={72} height={72} fill={DarkTheme.text} />
        </Rotate>

        <ScrollSpacer ref={spacerRef} />
      </Page>
    </ThemeProvider>
  );
};

export default ProjectPage;
