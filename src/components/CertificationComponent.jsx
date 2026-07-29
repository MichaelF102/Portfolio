import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQueries } from "./Themes";

const Card = styled(motion.a)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 20rem;
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(3px);
  box-shadow: 0 0.35rem 1rem rgba(0, 0, 0, 0.12);
  text-decoration: none;
  border: 2px solid ${(props) => props.theme.text};
  padding: 1rem;
  color: ${(props) => props.theme.text};
  background-color: rgba(252, 246, 244, 0.92);
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  ${mediaQueries(25)`
    min-height: 18rem;
    padding: 0.85rem;
    backdrop-filter: none;
  `};
`;

const ImageWrap = styled.div`
  flex: 1 1 auto;
  min-height: 9rem;
  max-height: 11rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.25rem;
  overflow: hidden;

  ${Card}:hover & {
    border-color: ${(props) => props.theme.body};
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const CardMeta = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.75rem;
`;

const Title = styled.h3`
  && {
    display: block;
    width: 100%;
  }
  margin: 0;
  padding: 0 0 0.5rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.35;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Card}:hover & {
    border-bottom-color: ${(props) => props.theme.body};
  }

  ${mediaQueries(25)`
    font-size: 0.85rem;
  `};
`;

const HashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.6rem;
  font-family: "Ubuntu Mono", monospace;
  font-size: 0.75rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-family: "Karla", sans-serif;
  opacity: 0.85;
`;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const CertificationComponent = ({ certification }) => {
  const { name, tags, date, imgSrc, link } = certification;

  return (
    <Card
      href={link}
      target="_blank"
      rel="noreferrer"
      variants={item}
      aria-label={`View certificate: ${name}`}
    >
      <ImageWrap>
        <CertificateImage src={imgSrc} alt="" loading="lazy" />
      </ImageWrap>
      <CardMeta>
        <Title>{name}</Title>
        <HashTags>
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </HashTags>
        <Date>{date}</Date>
      </CardMeta>
    </Card>
  );
};

export default CertificationComponent;
