import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Action, ActionTypes as AT } from "./types";

export interface IHttpRequest {
  inProgress: boolean;
  error?: Error;
}

export interface IHttpSendAction {
  type: AT.HTTP_SEND;
}

export interface IHttpSuccessAction {
  type: AT.HTTP_SUCCESS;
}

export interface IHttpErrorAction {
  type: AT.HTTP_ERROR;
  payload: Error;
}

export type HttpAction = IHttpSendAction | IHttpSuccessAction | IHttpErrorAction;

const sleep = async (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export const httpSend = (): IHttpSendAction => {
  return {
    type: AT.HTTP_SEND,
  };
};

export const httpSuccess = (): IHttpSuccessAction => {
  return {
    type: AT.HTTP_SUCCESS,
  };
};

export const httpError = (error: Error): IHttpErrorAction => {
  return {
    payload: error,
    type: AT.HTTP_ERROR,
  };
};

export const makeHttpRequest = async (
  dispatch: Dispatch<Action>,
  callback: () => Promise<AxiosResponse<any>>,
): Promise<AxiosResponse<any>> => {
  try {
    dispatch(httpSend());
    await sleep(2000);
    const result = await callback();
    dispatch(httpSuccess());
    return result;
  } catch (err) {
    dispatch(httpError(err));
    throw new Error("Http request error!");
  }
};
