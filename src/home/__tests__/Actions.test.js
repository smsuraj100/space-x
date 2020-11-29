import * as actions from "../Actions";
import * as types from "../ActionTypes";

const payload = {
  test: "test data",
};

describe("home: actions", () => {
  it("should create an action to update viewport value", () => {
    const expectedAction = {
      type: types.UPDATE_VIEWPORT,
      payload,
    };

    expect(actions.updateViewportType(payload)).toEqual(expectedAction);
  });

  it("should create an action to request homepage data", () => {
    const expectedAction = {
      type: types.REQUEST_HOME_PAGE_DATA,
    };

    expect(actions.requestHomePageData()).toEqual(expectedAction);
  });

  it("should create an action to recieve homepage data", () => {
    const expectedAction = {
      type: types.RECEIVE_HOME_PAGE_DATA,
      payload,
    };

    expect(actions.receiveHomePageData(payload)).toEqual(expectedAction);
  });

  it("should create an action that fails to fetch homepage data", () => {
    const expectedAction = {
      type: types.FAILURE_HOME_PAGE_DATA,
    };

    expect(actions.failureHomePageData()).toEqual(expectedAction);
  });

  it("should create an action to request filtered data", () => {
    const expectedAction = {
      type: types.REQUEST_FILTERED_DATA,
    };

    expect(actions.requestFilteredData()).toEqual(expectedAction);
  });

  it("should create an action to recieve filtered data", () => {
    const expectedAction = {
      type: types.RECEIVE_FILTERED_DATA,
      payload,
    };

    expect(actions.receiveFilteredData(payload)).toEqual(expectedAction);
  });

  it("should create an action that fails to fetch filtered data", () => {
    const expectedAction = {
      type: types.FAILURE_FILTERED_DATA,
    };

    expect(actions.failureFilteredData()).toEqual(expectedAction);
  });
});
