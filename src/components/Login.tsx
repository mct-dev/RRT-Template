import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { IStoreState } from "../reducers";
import { IAuthStatus, AuthSuccessAction, AuthErrorAction, IAuthSuccessAction } from "../actions/auth";
import { Dispatch } from "redux";
import { Redirect } from "react-router-dom";

interface ILoginProps {
	auth: IAuthStatus,
	authSuccess: () => IAuthSuccessAction,
}

class _Login extends Component<ILoginProps> {

  render() {
		const { auth: { authenticated }, authSuccess } = this.props;
		if (authenticated) {

			return (
				<Redirect to="/" />
			);

		} else {

			return (
				<Button onClick={authSuccess}>
					Login
				</Button>
			);
		}
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
	authSuccess: () => dispatch(AuthSuccessAction()),
	authError: () => dispatch(AuthErrorAction())
})

export const Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(_Login);
