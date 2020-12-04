import * as types from "./ActionTypes";

/**
 * @description Request action for getting home page data
 */
export const requestHomePageData = () => ({
  type: types.REQUEST_HOME_PAGE_DATA,
});

/**
 * @description Receive action for getting home page data
 */
export const receiveHomePageData = (payload) => ({
  type: types.RECEIVE_HOME_PAGE_DATA,
  payload,
});

/**
 * @description Failure action for fetching home page data
 */
export const failureHomePageData = () => ({
  type: types.FAILURE_HOME_PAGE_DATA,
});

/**
 * @description Request action for getting filtered data
 */
export const requestFilteredData = () => ({
  type: types.REQUEST_FILTERED_DATA,
});

/**
 * @description Receive action for getting filtered data
 */
export const receiveFilteredData = (payload) => ({
  type: types.RECEIVE_FILTERED_DATA,
  payload,
});

/**
 * @description Failure action for fetching filtered data
 */
export const failureFilteredData = () => ({
  type: types.FAILURE_FILTERED_DATA,
});
