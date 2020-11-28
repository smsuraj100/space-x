import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  height:fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;

  @media (min-width: 700px) {
    width: 42%;
  }

  @media (min-width: 1024px) {
    width: 22%;
  }
`;

export const MissionImg = styled.img`
  width: 70%;
  align-self: center;
`;

export const CardHeadingLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;

  @media (min-width: 700px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 13px;
    line-height: 19px;
  }
`;

export const CardLabel = styled.label`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;

  @media (min-width: 700px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const CardName = styled(CardHeadingLabel)`
  margin-top: 10px;
`;

export const MissionIds = styled.ul`
  margin: 0;
  font-size: 16px;
  line-height: 22px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
