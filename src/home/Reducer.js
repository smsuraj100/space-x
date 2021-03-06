import * as actionTypes from "./ActionTypes";

const defaultState = {
  homePageData: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
};

const HomePageReducer = function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: true,
        isSuccess: false,
        isError: false,
      };
    case actionTypes.RECEIVE_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        homePageData: action.payload,
      };
    case actionTypes.FAILURE_HOME_PAGE_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: true,
      };
    case actionTypes.REQUEST_FILTERED_DATA:
      return {
        ...state,
        isFetching: true,
        isSuccess: false,
        isError: false,
      };
    case actionTypes.RECEIVE_FILTERED_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccess: true,
        homePageData: action.payload,
      };
    case actionTypes.FAILURE_FILTERED_DATA:
      return {
        ...state,
        isFetching: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default HomePageReducer;
