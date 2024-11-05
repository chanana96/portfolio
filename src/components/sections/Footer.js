import { React } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import { List, styled, useTheme, useMediaQuery } from "@mui/material";

import { emailSvgPath, githubSvgPath, linkedInSvgPath } from "../SvgHelper";

//Component styles//
const StyledFooterRoot = styled("section")(({ theme }) => ({
  minHeight: "10vh",
  [theme.breakpoints.down("lg")]: {
    minHeight: "20vh",
  },
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
}));

const StyledFooterList = styled(List)({
  display: "block",
});
const StyledListItemLink = styled("a")(({ theme }) => ({
  justifyContent: "center",
  padding: "0.4rem",
  width: "0",
}));

//End component styles

const Footer = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const [footer, footerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledFooterRoot ref={footer}>
      <div
        style={
          footerInView ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className={footerInView ? "animate__animated animate__fadeInUp" : ""}
      >
        {lg && (
          <StyledFooterList>
            <StyledListItemLink
              sx={{ marginRight: "-0.3rem" }}
              href="https://www.linkedin.com/in/"
              target="_blank"
            >
              <svg
                fill={theme.palette.textMain.main}
                width="32px"
                height="32px"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d={linkedInSvgPath} />
              </svg>
            </StyledListItemLink>
            <StyledListItemLink
              href="https://github.com/chanana96"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
                fillRule="evenodd"
                fill={theme.palette.textMain.main}
              >
                <title>Github</title>
                <path fillRule="evenodd" d={githubSvgPath} />
              </svg>
            </StyledListItemLink>
            <StyledListItemLink
              href="mailto:chan.kim105@gmail.com"
              sx={{ transform: "scale(0.95)" }}
            >
              <svg
                fill={theme.palette.textMain.main}
                height="32px"
                width="32px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 75.294 75.294"
                xmlSpace="preserve"
              >
                <title>Email</title>
                <g>
                  <path d={emailSvgPath} />
                </g>
              </svg>
            </StyledListItemLink>
          </StyledFooterList>
        )}
      </div>
    </StyledFooterRoot>
  );
};

export default Footer;
