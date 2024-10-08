import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { navDelay, loaderDelay } from "@utils";
import { usePrefersReducedMotion } from "@hooks";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  .gradient {
    background: linear-gradient(270deg, #ff8a00, #e52e71);
    /* background-color: #0093e9;
    background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%); */

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h3 {
    margin-top: 2px;
    color: var(--slate);
    line-height: 1;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Nguyen Thanh Sang.</h2>;
  const three = (
    <h3 className="gradient big-heading">A front-end developer.</h3>
  );
  const four = (
    <>
      <p>
        As a front-end developer, I specialize in building responsive and
        user-friendly web applications using HTML, CSS, and JavaScript. I am
        proficient with <a>React</a>. I want to create high-quality, visually
        appealing solutions that meet the needs of both users and stakeholders.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="/resume.pdf"
      target="_blank"
      rel="noreferrer"
    >
      Check out my resume!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
