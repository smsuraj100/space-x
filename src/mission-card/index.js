import React from "react";

import {
  CardContainer,
  MissionImg,
  CardHeadingLabel,
  CardLabel,
  CardName,
  MissionIds,
  Flex,
} from "./styles";

const MissionCard = ({ mission }) => {
  const {
    mission_id,
    mission_name,
    launch_success,
    launch_year,
    links: { mission_patch_small },
    rocket: {
      first_stage: { cores },
    },
  } = mission;

  return (
    <CardContainer>
      <MissionImg src={mission_patch_small} alt="alt" />
      <CardName>{mission_name}</CardName>

      <CardName>Mission Ids:</CardName>
      <MissionIds>
        {mission_id.length ? (
          mission_id.map((val, i) => <li key={i}>{val ? val : "NA"}</li>)
        ) : (
          <li>NA</li>
        )}
      </MissionIds>
      <Flex>
        <CardHeadingLabel>Launch Year:</CardHeadingLabel>
        <CardLabel>{`  ${launch_year}`}</CardLabel>
      </Flex>
      <Flex>
        <CardHeadingLabel>Successful Launch:</CardHeadingLabel>
        <CardLabel>{`  ${launch_success}`}</CardLabel>
      </Flex>
      <Flex>
        <CardHeadingLabel>Successful Landing:</CardHeadingLabel>
        <CardLabel>
          {cores[0].land_success !== null ? ` ${cores[0].land_success}` : "NA"}
        </CardLabel>
      </Flex>
    </CardContainer>
  );
};

export default React.memo(MissionCard);
