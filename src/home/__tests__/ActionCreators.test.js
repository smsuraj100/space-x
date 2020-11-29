import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axiosMock from "axios";

import {
  REQUEST_HOME_PAGE_DATA,
  RECEIVE_HOME_PAGE_DATA,
  FAILURE_HOME_PAGE_DATA,
  REQUEST_FILTERED_DATA,
  RECEIVE_FILTERED_DATA,
  FAILURE_FILTERED_DATA,
} from "../ActionTypes";

import { fetchHomePageData, fetchFilteredData } from "../ActionCreators";

/** Mocks */
jest.mock("axios");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const sampleStore = {
  store: [],
};
const store = mockStore(sampleStore);
const mockResponse = [{ test: "test" }];

describe("home: Action Creators", () => {
  beforeEach(() => {
    /** Clear mocks and actions before each test run */
    store.clearActions();
    axiosMock.mockClear();
    jest.clearAllMocks();
  });

  it("creates REQUEST AND RECEIVE when fetching homepage data is successful", () => {
    axiosMock.get.mockImplementation(() =>
      Promise.resolve({ data: mockResponse })
    );
    const expectedActions = [
      { type: REQUEST_HOME_PAGE_DATA },
      {
        type: RECEIVE_HOME_PAGE_DATA,
        payload: mockResponse,
      },
    ];

    return store.dispatch(fetchHomePageData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REQUEST and FAILURE when fetching homepage data fails", () => {
    axiosMock.get.mockResolvedValueOnce(
      Promise.reject({ response: { data: "failed" } })
    );
    const expectedActions = [
      { type: REQUEST_HOME_PAGE_DATA },
      {
        type: FAILURE_HOME_PAGE_DATA,
      },
    ];

    return store.dispatch(fetchHomePageData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REQUEST AND RECEIVE when fetching filtered data is successful", () => {
    axiosMock.get.mockImplementation(() =>
      Promise.resolve({ data: mockResponse })
    );
    const expectedActions = [
      { type: REQUEST_FILTERED_DATA },
      {
        type: RECEIVE_FILTERED_DATA,
        payload: mockResponse,
      },
    ];

    return store.dispatch(fetchFilteredData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REQUEST and FAILURE when fetching filtered data fails", () => {
    axiosMock.get.mockResolvedValueOnce(
      Promise.reject({ response: { data: "failed" } })
    );
    const expectedActions = [
      { type: REQUEST_FILTERED_DATA },
      {
        type: FAILURE_FILTERED_DATA,
      },
    ];

    return store.dispatch(fetchFilteredData()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
