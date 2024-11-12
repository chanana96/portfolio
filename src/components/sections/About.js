import { React } from 'react';
import { styled } from '@mui/material';
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from './Styles';
import 'animate.css';
import { useInView } from 'react-intersection-observer';
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  FaNodeJs,
  FaAws,
  FaReact,
  FaPython,
  FaGitAlt,
  FaMicrosoft,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiVite,
  SiAxios,
  SiSocketdotio,
  SiMysql,
} from 'react-icons/si';

const StyledTechnologyItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
});

const StyledScrollingBelt = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: '3rem',
  overflow: 'hidden',
  width: '98%',
  marginLeft: '0.1rem',
  willChange: 'transform',
  contain: 'content',
}));
const StyledScrollingItem = styled('div')(({ theme }) => ({
  '@keyframes moveLeft': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-1600%)',
    },
  },
  'animation': 'moveLeft 22s linear infinite',
  'background': theme.palette.backgroundSecondary.main,
  'marginRight': '3rem',
  'borderRadius': '1rem',
  'padding': '0.75rem',
  'minWidth': '7rem',
  'textAlign': 'center',
  'fontWeight': '600',
  [theme.breakpoints.down('md')]: {
    marginRight: '2.2rem',
    padding: '0.7rem 0.5rem',
  },
  [theme.breakpoints.down('xs')]: {
    marginRight: '1.6rem',
    padding: '0.5rem',
    minWidth: '5rem',
  },
}));

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const technologiesArr = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Mongo.db', icon: <SiMongodb /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Javascript', icon: <SiJavascript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'IIS', icon: <FaMicrosoft /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'Socket.io', icon: <SiSocketdotio /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
  ];

  const { t } = useTranslation();

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot>
        <StyledGenericContainer
          style={{ overflow: 'hidden' }}
          ref={aboutContainer}
          sx={
            aboutContainerInView
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          className={
            aboutContainerInView ? 'animate__animated animate__fadeInUp' : ''
          }
        >
          <StyledGenericTitle component="h1">
            {t('about.title')}
            <StyledDivider />
          </StyledGenericTitle>

          <StyledGenericSubText component="h1">
            {t('about.text')}
          </StyledGenericSubText>

          <StyledScrollingBelt>
            {[...technologiesArr, ...technologiesArr].map((item, index) => (
              <StyledScrollingItem key={`tech-${index}`}>
                <StyledTechnologyItem>
                  <span>{item.name}</span>
                  <span style={{ fontSize: '1.5em' }}>{item.icon}</span>
                </StyledTechnologyItem>
              </StyledScrollingItem>
            ))}
          </StyledScrollingBelt>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default About;
