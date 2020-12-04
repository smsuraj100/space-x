import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomePageData } from "./ActionCreators";

// Style imports
import { Container, Header, Body, MissionContainer, Footer } from "./styles";

// Lazy loading of components
const FilterComponent = lazy(() => import("../filters"));
const MissionCardComponent = lazy(() => import("../mission-card"));

const Home = () => {
  const dispatch = useDispatch();

  const {
    homepage: { homePageData },
  } = useSelector((state) => state);

  // Call Homepage data API
  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  return (
    <Container>
      <Header>SpaceX Launch Programs</Header>
      <Body>
        <Suspense fallback={""}>
          <FilterComponent />
        </Suspense>
        <MissionContainer>
          {homePageData.length ? (
            homePageData.map((mission, i) => (
              <Suspense key={i} fallback={""}>
                <MissionCardComponent mission={mission} />
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
