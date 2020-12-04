import reducer from "../Reducer";
import * as types from "../ActionTypes";

const payload = [{ test: "test" }];

const initialState = {
  homePageData: [],
  isFetching: false,
  isSuccess: false,
  isError: false,
};

fdescribe("home: reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REQUEST_HOME_PAGE_DATA", () => {
    expect(
      reducer([], {
        type: types.REQUEST_HOME_PAGE_DATA,
      })
    ).toEqual({
      isFetching: true,
      isSuccess: false,
      isError: false,
    });
  });

  it("should handle RECEIVE_HOME_PAGE_DATA", () => {
    expect(
      reducer([], {
        type: types.RECEIVE_HOME_PAGE_DATA,
        payload,
      })
    ).toEqual({
      isFetching: false,
      isSuccess: true,
      homePageData: payload,
    });
  });

  it("should handle FAILURE_HOME_PAGE_DATA", () => {
    expect(
      reducer([], {
        type: types.FAILURE_HOME_PAGE_DATA,
      })
    ).toEqual({
      isFetching: false,
      isSuccess: false,
      isError: true,
    });
  });

  it("should handle REQUEST_FILTERED_DATA", () => {
    expect(
      reducer([], {
        type: types.REQUEST_FILTERED_DATA,
      })
    ).toEqual({
      isFetching: true,
      isSuccess: false,
      isError: false,
    });
  });

  it("should handle RECEIVE_FILTERED_DATA", () => {
    expect(
      reducer([], {
        type: types.RECEIVE_FILTERED_DATA,
        payload,
      })
    ).toEqual({
      isFetching: false,
      isSuccess: true,
      homePageData: payload,
    });
  });

  it("should handle FAILURE_FILTERED_DATA", () => {
    expect(
      reducer([], {
        type: types.FAILURE_FILTERED_DATA,
      })
    ).toEqual({
      isFetching: false,
      isSuccess: false,
      isError: true,
    });
  });
});
