import { motion } from "framer-motion";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";

const Box = styled(motion.li)`
  flex: 0 0 auto;
  width: 17.5rem;
  min-height: 24rem;
  max-height: calc(
    100vh - var(--page-inset-top) - var(--page-inset-bottom) - 2rem
  );
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border-radius: 0 3rem 0 3rem;
  border: 1px solid ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  list-style: none;
  box-sizing: border-box;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border-color: ${(props) => props.theme.text};
  }

  ${mediaQueries(40)`
    width: 15rem;
    min-height: 22rem;
    border-radius: 0 2.25rem 0 2.25rem;
  `};

  ${mediaQueries(25)`
    width: 13.5rem;
    min-height: 20rem;
  `};
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.5rem 1.75rem 1rem;
  overflow: hidden;
`;

const Title = styled.h2`
  && {
    display: block;
    width: 100%;
  }
  margin: 0;
  flex-shrink: 0;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Karla", sans-serif;
  line-height: 1.2;
`;

const Description = styled.p`
  flex: 1 1 auto;
  min-height: 0;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.55;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 0.15rem;

  /* Keep footer visible; scroll description only when needed */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: currentColor;
    opacity: 0.35;
    border-radius: 4px;
  }
`;

const Tags = styled.div`
  flex-shrink: 0;
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.65rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;

  ${Box}:hover & {
    border-top-color: ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-family: "Ubuntu Mono", monospace;
  opacity: 0.9;
`;

const Footer = styled.footer`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  min-height: 3rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0.75rem 1rem;
  box-sizing: border-box;

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const VisitLink = styled.a`
  flex: 1;
  color: inherit;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: "Karla", sans-serif;
  padding: 0.25rem 0.5rem;
  border-radius: 0 0 0 1.25rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const GitLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  color: inherit;
  text-decoration: none;

  ${Box}:hover & svg {
    fill: ${(props) => props.theme.body};
  }
`;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const normalizeTags = (tags) => {
  if (!Array.isArray(tags)) return [];
  return tags.flatMap((tag) =>
    String(tag)
      .split(/,\s*/)
      .map((t) => t.trim())
      .filter(Boolean)
  );
};

const Card = ({ data }) => {
  const { id, name, description, tags, demo, github } = data;
  const tagList = normalizeTags(tags);

  return (
    <Box variants={item}>
      <CardBody>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>
          {tagList.map((tag) => (
            <Tag key={`${id}-${tag}`}>#{tag}</Tag>
          ))}
        </Tags>
      </CardBody>
      <Footer>
        <VisitLink href={demo} rel="noreferrer" target="_blank">
          Visit
        </VisitLink>
        <GitLink
          href={github}
          rel="noreferrer"
          target="_blank"
          aria-label={`${name} on GitHub`}
        >
          <Github width={26} height={26} />
        </GitLink>
      </Footer>
    </Box>
  );
};

export default Card;
