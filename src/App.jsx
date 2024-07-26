// import { useState } from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";
import { Layout, Hero, About } from "@components";
import "./App.css";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

function App() {
  return (
    <>
      <Layout location={location}>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
        </StyledMainContainer>
      </Layout>
    </>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired
};

export default App;
