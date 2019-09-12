import { Action, ActionTypes as AT, IHttpRequest } from "../actions";

export const initialHttpState: IHttpRequest = {
  inProgress: false,
};

export const httpReducer = (state = initialHttpState, action: Action) => {
  switch (action.type) {
    case AT.HTTP_SEND:
      return {
        ...state,
        inProgress: true,
      };
    case AT.HTTP_SUCCESS:
      return {
        ...state,
        inProgress: false,
      };
    case AT.HTTP_ERROR:
      return {
        ...state,
        error: action.payload,
        inProgress: false,
      };
     default:
       return state;
  }
};
