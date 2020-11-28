import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.label`
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  border-bottom: 2px solid;

  @media (min-width: 700px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 20px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  align-items: center;

  @media (min-width: 700px) {
    justify-content: space-around;
    align-items: unset;
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
    align-items: unset;
    margin-top: 20px;
  }
`;

export const FilterButton = styled.button`
  width: 65px;
  height: 30px;
  font-size: 18px;
  line-height: 24px;
  border-radius: 5px;
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;

export const MissionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;

  @media (min-width: 700px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }
`;

export const Footer = styled.label`
  font-size: 16px;
  line-height: 22px;
  display: block;
  margin-bottom: 10px;
`;

export const BackdropFilter = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  backdrop-filter: blur(30px);
  display: grid;
  justify-content: flex-end;
  z-index: 2;
  overflow-y: scroll;
`;
