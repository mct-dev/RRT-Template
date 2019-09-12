import { AuthClearAction, AuthErrorAction, AuthSuccessAction } from "store/actions/auth";
import { authReducer, initialAuthState } from "store/reducers/auth";

describe("The AuthReducer", () => {

  test("correctly updates state for a successful authentication", () => {
    const state = {
      ...initialAuthState,
      authenticated: false,
    };
    const action = AuthSuccessAction();
    const newState = authReducer(state, action);

    expect(newState.authenticated).toBeTruthy();
  });

  test("correctly updates state for an authentication result in an error", () => {
    const state = {
      ...initialAuthState,
      authenticated: true,
    };
    const action = AuthErrorAction();
    const newState = authReducer(state, action);

    expect(newState.authenticated).toBeFalsy();
  });

  test("correctly updates state when clearing authorization status", () => {
    const state = {
      ...initialAuthState,
      authenticated: true,
    };
    const action = AuthClearAction();
    const newState = authReducer(state, action);

    expect(newState.authenticated).toBeFalsy();
  });

});
