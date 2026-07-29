import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";
import { pageContentInset } from "../layout/pageInsets";

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
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  ${pageContentInset}
`;

const PageContent = styled.div`
  position: relative;
  z-index: 3;
  width: min(100%, 75rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
`;

const Card = styled.article`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem 2.25rem;
  line-height: 1.55;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
  box-sizing: border-box;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(16rem, 1fr));
  gap: 1.75rem;
  width: 100%;
  align-items: stretch;

  /* Stack before columns get too narrow (avoids crushed text) */
  @media (max-width: 68em) {
    grid-template-columns: 1fr;
    max-width: 32rem;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  && {
    display: flex;
    width: 100%;
  }
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0;
  flex-shrink: 0;

  ${Card}:hover & svg {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-wrap: normal;
  word-break: normal;

  ${Card}:hover & {
    color: inherit;
  }

  strong {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.35rem;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
  }

  ul {
    margin: 0.5rem 0 0;
    padding-left: 1.25rem;
  }

  p {
    margin: 0.35rem 0 0;
  }
`;

const SkillList = styled.ul`
  margin: 0;
  padding-left: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  column-gap: 2rem;
  row-gap: 0.35rem;
`;

const PremiumCard = styled(motion.article)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2.25rem;
  line-height: 1.55;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
  box-sizing: border-box;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    
    .icon-wrapper svg {
      transform: scale(1.2) rotate(12deg);
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
  }
`;

const SkillBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const SkillBadge = styled(motion.div)`
  display: inline-flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  font-size: 0.93rem; /* 15px Tags */
  font-weight: 500;
  gap: 0.35rem;
  cursor: default;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex: 1 1 calc(50% - 0.75rem); /* two column flow */
  min-width: 7.5rem;

  @media (max-width: 25em) {
    flex: 1 1 100%;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    .logo {
      transform: scale(1.25) rotate(10deg);
    }
    
    .bar-fill {
      background-color: ${(props) => props.theme.body};
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo-name {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .logo {
    font-size: 1.15rem;
    transition: transform 0.2s ease;
    display: inline-block;
  }

  .name {
    font-weight: 700;
  }

  .percent {
    font-size: 0.8rem;
    opacity: 0.85;
    font-family: "Ubuntu Mono", monospace;
  }

  .bar-container {
    width: 100%;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background-color: ${(props) => props.theme.text};
    transition: width 0.8s ease-out;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin: 2rem 0;

  @media (max-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 12px;
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }

  .number {
    font-size: 2.25rem; /* 36px */
    font-weight: 800;
    font-family: "Karla", sans-serif;
  }

  .label {
    font-size: 0.95rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 48rem;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: ${(props) => props.theme.text};
    opacity: 0.2;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 4.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 1.25rem;
  top: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.body};
  border: 4px solid ${(props) => props.theme.text};
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transform: scale(1.2);
  }
`;

const ExpCard = styled(PremiumCard)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .header-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .role {
    font-size: 1.375rem; /* 22px Job Title */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .company-location {
    display: flex;
    justify-content: space-between;
    font-size: 1.06rem; /* 17px Body */
    font-weight: 600;
    opacity: 0.9;
  }

  .period {
    font-size: 0.95rem;
    opacity: 0.75;
    font-style: italic;
  }

  .achievements {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 1.06rem; /* 17px Body */
  }

  .achievement-item {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.45;
  }

  .checkmark {
    color: ${(props) => props.theme.text};
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 0.1rem;
  }

  .tech-section {
    margin-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: 0.75rem;
  }

  .tech-label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.35rem;
    display: block;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    font-size: 0.93rem; /* 15px Tags */
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.25rem 0.6rem;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
  }
`;

const PageTitle = styled.h1`
  font-size: 2.25rem; /* 36px page title */
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Karla", sans-serif;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 0.75rem;
  
  .icon {
    font-size: 1.8rem;
    transition: transform 0.3s ease;
  }
  
  h3 {
    font-size: 1.625rem; /* 26px Category */
    margin: 0;
    font-weight: 700;
  }
`;

const BackgroundTitle = styled.span`
  position: fixed;
  bottom: calc(var(--page-inset-bottom) + 1rem);
  right: var(--page-inset-right);
  left: var(--page-inset-left);
  text-align: right;
  font-family: "Karla", sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: rgba(0, 0, 0, 0.08);
  pointer-events: none;
  z-index: 1;
  line-height: 1.1;
  max-width: 40%;

  ${mediaQueries(40)`
    font-size: clamp(1.5rem, 6vw, 2.25rem);
    bottom: 4%;
    right: 2%;
  `};
`;

const skillCategories = [
  {
    title: "Programming and OS",
    icon: "💻",
    skills: [
      { name: "Python", logo: "🐍", level: 95 },
      { name: "C++", logo: "⚙️", level: 75 },
      { name: "SQL", logo: "📊", level: 90 },
      { name: "Java", logo: "☕", level: 80 },
      { name: "Git", logo: "🐙", level: 85 },
      { name: "Linux", logo: "🖥️", level: 90 }
    ]
  },
  {
    title: "Quantitative Finance",
    icon: "📈",
    skills: [
      { name: "Algorithmic Trading", logo: "⚡", level: 85 },
      { name: "Options Pricing", logo: "🧮", level: 80 },
      { name: "Greeks", logo: "θ", level: 80 },
      { name: "Portfolio Optimization", logo: "⚖️", level: 85 },
      { name: "Risk Management", logo: "🛡️", level: 75 },
      { name: "Time Series Analysis", logo: "📉", level: 85 }
    ]
  },
  {
    title: "Data Engineering",
    icon: "⚙️",
    skills: [
      { name: "ETL Pipelines", logo: "🔗", level: 90 },
      { name: "Apache Spark", logo: "⚡", level: 80 },
      { name: "Kafka", logo: "🚀", level: 75 },
      { name: "Airflow", logo: "🌬️", level: 80 },
      { name: "dbt", logo: "🛠️", level: 85 },
      { name: "Snowflake", logo: "❄️", level: 80 },
      { name: "AWS", logo: "☁️ ", level: 75 }
    ]
  },
  {
    title: "Data Science",
    icon: "🤖",
    skills: [
      { name: "Scikit-Learn ", logo: "🧠", level: 85 },
      { name: "TensorFlow", logo: "🔥", level: 75 },
      { name: "PyTorch", logo: "🔥", level: 80 },
      { name: "OpenCV", logo: "👁️", level: 80 },
      { name: "Numpy", logo: "🧊", level: 75 },
      { name: "Pandas", logo: "🐼", level: 75 },
      { name: "Plotly", logo: "📊", level: 75 }
    ]
  }
];

const experiences = [
  {
    role: "Data Analyst",
    company: "Asterix StratComm",
    location: "Remote",
    period: "Sept 2023 - Present",
    achievements: [
      "Designed and optimized Python ETL pipelines using Pandas and NumPy to ingest, clean, transform, and standardize 80K+ FMCG records, reducing data processing time by 65% while improving pipeline scalability and reliability.",
      "Built automated data quality frameworks with schema validation, missing-value imputation, duplicate detection, and consistency checks, improving data accuracy by 30% and eliminating repetitive manual validation.",
      "Developed interactive Streamlit analytics dashboards with KPI tracking, advanced filtering, and drill-down capabilities, reducing reporting turnaround by 70% and enabling business stakeholders to explore pricing, SKU, brand, variant, and regional performance across six product categories.",
      "Performed advanced EDA and engineered reusable data transformation workflows, uncovering pricing trends, product segmentation, and regional insights while improving code maintainability and accelerating analytics feature delivery by 50%."
    ],
    stack: ["Python", "Excel", "Pandas", "Streamlit", "Plotly"]
  },
  {
    role: "Data Analyst ",
    company: "Come To Be Talent Development Services LLP",
    location: "Freelance",
    period: "Mar 2025 - Jul 2025",
    achievements: [
      "Developed an web scraping pipeline using Python to collect professional coaching data from LinkedIn and the ICF website, creating a structured lead-generation dataset.",
      "Cleaned, standardized, and validated scraped data through preprocessing workflows, improving data quality and ensuring consistency for downstream analysis.",
      "Built an interactive Streamlit dashboard to visualize, filter, and search coaching profiles, enabling efficient lead exploration and business insights."
    ],
    stack: ["Python", "Streamlit", "BeautifulSoup", "Pandas", "Plotly"]
  }
];

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skillsexperience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />
          <PageNav variant="light" />

          <PageContent>
            <PageTitle>
              <Design width={36} height={36} className="icon-wrapper" />
              Skills
            </PageTitle>

            <SkillsGrid>
              {skillCategories.map((category) => (
                <PremiumCard key={category.title}>
                  <CategoryHeader>
                    <span className="icon">{category.icon}</span>
                    <h3>{category.title}</h3>
                  </CategoryHeader>
                  <SkillBadgeContainer>
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        whileHover={{ y: -3 }}
                      >
                        <div className="info">
                          <div className="logo-name">
                            <span className="logo">{skill.logo}</span>
                            <span className="name">{skill.name}</span>
                          </div>
                          <span className="percent">{skill.level}%</span>
                        </div>
                        <div className="bar-container">
                          <div
                            className="bar-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </SkillBadge>
                    ))}
                  </SkillBadgeContainer>
                </PremiumCard>
              ))}
            </SkillsGrid>

            <StatsSection>
              <StatCard whileHover={{ y: -5 }}>
                <span className="number">3+</span>
                <span className="label">Years Experience</span>
              </StatCard>
              <StatCard whileHover={{ y: -5 }}>
                <span className="number">10+</span>
                <span className="label">Projects</span>
              </StatCard>
              <StatCard whileHover={{ y: -5 }}>
                <span className="number">10+</span>
                <span className="label">Technologies</span>
              </StatCard>
              <StatCard whileHover={{ y: -5 }}>
                <span className="number">6</span>
                <span className="label">Certifications</span>
              </StatCard>
            </StatsSection>

            <PageTitle style={{ marginTop: "3rem" }}>
              <Develope width={36} height={36} className="icon-wrapper" />
              Experience
            </PageTitle>

            <Timeline>
              {experiences.map((job) => (
                <TimelineItem key={job.company}>
                  <TimelineDot>
                    💼
                  </TimelineDot>
                  <ExpCard>
                    <div className="header-info">
                      <div className="role">
                        💼 {job.role}
                      </div>
                      <div className="company-location">
                        <span>{job.company}</span>
                        <span>{job.location}</span>
                      </div>
                      <div className="period">{job.period}</div>
                    </div>
                    <ul className="achievements">
                      {job.achievements.map((ach, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="checkmark">✔</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="tech-section">
                      <span className="tech-label">Tech Stack</span>
                      <div className="tech-tags">
                        {job.stack.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ExpCard>
                </TimelineItem>
              ))}
            </Timeline>
          </PageContent>

          <BackgroundTitle>Skills &amp; Experience</BackgroundTitle>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
