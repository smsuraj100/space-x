import * as actionTypes from "./ActionTypes";

const findInitialViewport = () => {
  if (window.innerWidth < 700) {
    return "MOBILE";
  } else if (window.innerWidth >= 700 && window.innerWidth < 1024) {
    return "TAB";
  } else if (window.innerWidth >= 1024) {
    return "DESKTOP";
  }
};

const defaultState = {
  viewport: findInitialViewport(),
  homePageData: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
};

const HomePageReducer = function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_VIEWPORT:
      return {
        ...state,
        viewport: action.payload,
      };
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
