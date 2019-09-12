import Button from "components/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Dispatch } from "redux";
import { AuthErrorAction, AuthSuccessAction, IAuthStatus, IAuthSuccessAction } from "store/actions/auth";
import { IStoreState } from "store/reducers";

interface ILoginProps {
  auth: IAuthStatus;
  authSuccess: () => IAuthSuccessAction;
}

class CLogin extends Component<ILoginProps> {

  public render() {
    const { auth: { authenticated }, authSuccess } = this.props;
    if (authenticated) {

      return (
        <Redirect to="/protected" />
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
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  authError: () => dispatch(AuthErrorAction()),
  authSuccess: () => dispatch(AuthSuccessAction()),
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CLogin);
