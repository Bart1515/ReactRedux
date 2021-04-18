import "./App.css";
import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, reset } from "./mySectionsSlice";

const StyledSection = styled.div`
  border-radius: 25px;
  border: 2px solid #73ad21;
  padding: 20px;
  float: left;
`;

function Section(props) {
  const mySections = useSelector((state) => state.mySections);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    if (
      _.find(mySections, function (s) {
        return s.id === item.id;
      })
    ) {
      dispatch(remove(item));
    } else {
      dispatch(add(item));
    }
  };

  return (
    <StyledSection onClick={() => handleClick(props.item)}>
      {props.item.webTitle}
    </StyledSection>
  );
}

export default Section;
