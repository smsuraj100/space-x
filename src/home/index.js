import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";
import { updateViewportType } from "./Actions";
import { fetchHomePageData } from "./ActionCreators";

// Style imports
import {
  Container,
  Header,
  Body,
  FilterButton,
  MissionContainer,
  Footer,
  BackdropFilter,
} from "./styles";

import FilterComponent from "../filters";
import MissionCardComponent from "../mission-card";

const Home = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    homepage: { viewport, homePageData },
  } = useSelector((state) => state);

  // update the state with appropriate viewport value on resize
  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(() => {
        if (window.innerWidth < 700) {
          dispatch(updateViewportType("MOBILE"));
        } else if (window.innerWidth >= 700 && window.innerWidth < 1024) {
          dispatch(updateViewportType("TAB"));
        } else if (window.innerWidth >= 1024) {
          dispatch(updateViewportType("DESKTOP"));
        }
      }, 200)
    );

    return () => {
      window.removeEventListener(
        "resize",
        debounce(() => {
          if (window.innerWidth < 700) {
            dispatch(updateViewportType("MOBILE"));
          } else if (window.innerWidth >= 700 && window.innerWidth < 1024) {
            dispatch(updateViewportType("TAB"));
          } else if (window.innerWidth >= 1024) {
            dispatch(updateViewportType("DESKTOP"));
          }
        }, 200)
      );
    };
  });

  // Call Homepage data API
  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  const handleOnClickFilter = () => setIsModalOpen(true);

  const handleOnCloseClick = () => setIsModalOpen(false);

  return (
    <Container>
      <Header>SpaceX Launch Programs</Header>
      <Body isMobile={viewport === "MOBILE"}>
        {viewport === "MOBILE" ? (
          <>
            <FilterButton onClick={handleOnClickFilter}>Filter</FilterButton>
            {isModalOpen && (
              <BackdropFilter>
                <FilterComponent onCloseClick={handleOnCloseClick} />
              </BackdropFilter>
            )}
          </>
        ) : (
          <FilterComponent onCloseClick={handleOnCloseClick} />
        )}
        <MissionContainer>
          {homePageData.length ? (
            homePageData.map((mission, i) => (
              <MissionCardComponent key={i} mission={mission} />
            ))
          ) : (
            <b>No records Found!!</b>
          )}
        </MissionContainer>
      </Body>
      <Footer>
        <b>Developed by: </b>Suraj Mishra
      </Footer>
    </Container>
  );
};

export default Home;
