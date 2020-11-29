import React, { useState, useEffect, lazy, Suspense } from "react";
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

const FilterComponent = lazy(() => import("../filters"));
const MissionCardComponent = lazy(() => import("../mission-card"));

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
                <Suspense fallback={""}>
                  <FilterComponent onCloseClick={handleOnCloseClick} />
                </Suspense>
              </BackdropFilter>
            )}
          </>
        ) : (
          <Suspense fallback={""}>
            <FilterComponent onCloseClick={handleOnCloseClick} />
          </Suspense>
        )}
        <MissionContainer>
          {homePageData.length ? (
            homePageData.map((mission, i) => (
              <Suspense key={i} fallback={""}>
                <MissionCardComponent  mission={mission} />
              </Suspense>
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

export default React.memo(Home);
