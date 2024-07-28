import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Layout, Hero, About, Featured, Projects, Contact } from "@components";
import { pageQuery } from "@config";
import { NotFoundPage, ArchivePage } from "@pages";
import "./App.css";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function HomePage() {
  return (
    <>
      <Layout location={location}>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Featured />
          <Projects />
          <Contact />
        </StyledMainContainer>
      </Layout>
    </>
  );
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired
};

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/archive":
        return (
          <ArchivePage location={{ pathname: currentPath }} data={pageQuery} />
        );
      default:
        return <NotFoundPage location={{ pathname: currentPath }} />;
    }
  };

  return <>{renderPage()}</>;
}

export default App;
