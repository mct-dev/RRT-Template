import { httpError, httpSend, httpSuccess } from "store/actions/http";
import { httpReducer, initialHttpState } from "store/reducers/http";

describe("The HttpReducer", () => {

  test("correctly updates state for a pending http request", () => {
    const state = {
      ...initialHttpState,
      inProgress: false,
    };
    const action = httpSend();
    const newState = httpReducer(state, action);

    expect(newState.inProgress).toBeTruthy();
  });

  test("correctly updates state for a successful http request", () => {
    const state = {
      ...initialHttpState,
      inProgress: true,
    };
    const action = httpSuccess();
    const newState = httpReducer(state, action);

    expect(newState.inProgress).toBeFalsy();
  });

  test("correctly updates state for http request resulting in an error", () => {
    const state = {
      ...initialHttpState,
      error: undefined,
      inProgress: true,
    };
    const fakeError = new Error("omg error");
    const action = httpError(fakeError);
    const newState = httpReducer(state, action);

    expect(newState.inProgress).toBeFalsy();
    expect(newState.error).toEqual(fakeError);
  });

});
