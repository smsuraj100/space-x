import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  border-radius: 10px;
  margin-top: 10px;

  @media (min-width: 700px) {
    width: 30%;
    height: fit-content;
  }
  
  @media (min-width: 1024px) {
    width: 20%;
    height: fit-content;
  }
`;

export const FilterHeader = styled.label`
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 22px;
  line-height: 24px;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  padding: 0;
  margin: 0;
  border: none;
  position: absolute;
  right: 20px;
  top: 10px;
`;

export const FilterTitle = styled.label`
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FilterButtons = styled.button`
  width: 40%;
  height: 35px;
  font-size: 16px;
  line-height: 22px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ isSelected }) => (isSelected ? "#54bd58" : "#d6ffe3")};

  &:hover {
    background-color: #54bd58;
  }
`;
