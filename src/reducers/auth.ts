import { Action, ActionTypes as AT } from "../actions";
import { IAuthStatus } from "../actions/auth";

export const initialAuthState: IAuthStatus = {
	authenticated: false
};

export const authReducer = (state = initialAuthState, action: Action) => {
  switch (action.type) {
    case AT.AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
			};
    case AT.AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
      };
    case AT.AUTH_CLEAR:
      return {
        ...state,
        authenticated: false,
      };
     default:
       return state;
  }
};
