import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchFilteredData } from "../home/ActionCreators";

import {
  FilterContainer,
  FilterHeader,
  FilterTitle,
  FilterButtonsContainer,
  FilterButtons,
  ResetButton,
} from "./styles";
import { launchYears } from "../constants";

const Filters = () => {
  const dispatch = useDispatch();

  const [yearSelected, setYearSelected] = useState(9999);
  const [launchStatusSelected, setLaunchStatusSelected] = useState("");
  const [landingStatusSelected, setLandingStatusSelected] = useState("");

  const handleOnApplyingFilter = (launchYear, launchStatus, landingStatus) => {
    dispatch(fetchFilteredData(launchYear, launchStatus, landingStatus));
  };

  const handleYearOnClick = (year) => {
    setYearSelected(year);
    handleOnApplyingFilter(year, launchStatusSelected, landingStatusSelected);
  };

  const handleLaunchStatusOnClick = (status) => {
    setLaunchStatusSelected(status);
    handleOnApplyingFilter(yearSelected, status, landingStatusSelected);
  };

  const handleLandingStatusOnClick = (status) => {
    setLandingStatusSelected(status);
    handleOnApplyingFilter(yearSelected, launchStatusSelected, status);
  };

  const handleOnResetClick = () => {
    setYearSelected(9999);
    setLaunchStatusSelected("");
    setLandingStatusSelected("");
    handleOnApplyingFilter(9999, "", "");
  };

  return (
    <FilterContainer>
      <FilterHeader>Filters</FilterHeader>
      <FilterTitle>Launch Year</FilterTitle>
      <FilterButtonsContainer>
        {launchYears.map((year, i) => (
          <FilterButtons
            onClick={() => handleYearOnClick(year)}
            key={i}
            isSelected={yearSelected === year}
          >
            {year}
          </FilterButtons>
        ))}
      </FilterButtonsContainer>
      <FilterTitle>Successful Launch</FilterTitle>
      <FilterButtonsContainer>
        <FilterButtons
          onClick={() => handleLaunchStatusOnClick("true")}
          isSelected={launchStatusSelected === "true"}
        >
          True
        </FilterButtons>
        <FilterButtons
          onClick={() => handleLaunchStatusOnClick("false")}
          isSelected={launchStatusSelected === "false"}
        >
          False
        </FilterButtons>
      </FilterButtonsContainer>
      <FilterTitle>Successful Landing</FilterTitle>
      <FilterButtonsContainer>
        <FilterButtons
          onClick={() => handleLandingStatusOnClick("true")}
          isSelected={landingStatusSelected === "true"}
        >
          True
        </FilterButtons>
        <FilterButtons
          onClick={() => handleLandingStatusOnClick("false")}
          isSelected={landingStatusSelected === "false"}
        >
          False
        </FilterButtons>
      </FilterButtonsContainer>
      <ResetButton onClick={handleOnResetClick}>Reset</ResetButton>
    </FilterContainer>
  );
};

export default React.memo(Filters);
