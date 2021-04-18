import "./App.css";
import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import SectionsList from "./SectionsList";

const StyledApp = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
`;

function App() {
  const mySections = useSelector((state) => state.mySections);

  return (
    <StyledApp>
      <div>
        <h2>Mina ämnen:</h2>
        <div style={{ overflow: "hidden" }}>
          {mySections.map((s) => s.id + " ")}
        </div>
        <h2>Tillängliga ämnen:</h2>
        <SectionsList />
      </div>
    </StyledApp>
  );
}

export default App;
