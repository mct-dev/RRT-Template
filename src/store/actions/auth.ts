import { ActionTypes as AT } from "./types";

export interface IAuthStatus {
  authenticated: boolean;
}

export interface IAuthSuccessAction {
  type: AT.AUTH_SUCCESS;
}

export interface IAuthErrorAction {
  type: AT.AUTH_ERROR;
}

export interface IAuthClearAction {
  type: AT.AUTH_CLEAR;
}

export type AuthAction = IAuthSuccessAction | IAuthErrorAction;

export const AuthSuccessAction = (): IAuthSuccessAction => {
  return {
    type: AT.AUTH_SUCCESS,
  };
};

export const AuthErrorAction = (): IAuthErrorAction => {
  return {
    type: AT.AUTH_ERROR,
  };
};

export const AuthClearAction = (): IAuthClearAction => {
  return {
    type: AT.AUTH_CLEAR,
  };
};
