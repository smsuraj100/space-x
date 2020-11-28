import axios from "axios";
import {
  requestHomePageData,
  receiveHomePageData,
  failureHomePageData,
  requestFilteredData,
  receiveFilteredData,
  failureFilteredData,
} from "./Actions";

import { HOME_PAGE_API } from "../constants";

/**
 * @description Fetch Home page data
 * @param {} dispatch
 */
export function fetchHomePageData() {
  return (dispatch) => {
    dispatch(requestHomePageData());
    return axios
      .get(HOME_PAGE_API)
      .then((response) => {
        dispatch(receiveHomePageData(response?.data));
      })
      .catch(() => {
        dispatch(failureHomePageData());
      });
  };
}

/**
 * @description Apply and fetch filtered data
 * @param {} dispatch
 */
export function fetchFilteredData(launchYear, launchStatus, landingStatus) {
  const filterURL = `${HOME_PAGE_API}${
    launchYear !== 9999 ? `&launch_year=${launchYear}` : ""
  }${launchStatus ? `&launch_success=${launchStatus}` : ""}${
    landingStatus ? `&land_success=${landingStatus}` : ""
  }`;

  return (dispatch) => {
    dispatch(requestFilteredData());
    return axios
      .get(filterURL)
      .then((response) => {
        dispatch(receiveFilteredData(response?.data));
      })
      .catch(() => {
        dispatch(failureFilteredData());
      });
  };
}
