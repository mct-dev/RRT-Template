import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { IAuthStatus } from "store/actions/auth";
import { IStoreState } from "store/reducers";

export interface IAuthorizedRouteProps extends RouteProps {
  auth: IAuthStatus;
  protectedComponent: React.ElementType;
}

export class CAuthorizedRoute extends Component<IAuthorizedRouteProps> {

  public render() {
    const {
      auth: { authenticated },
      protectedComponent: PComponent,
      ...rest } = this.props;
    return (
    <div>
      <Route
        {...rest}
        render={(props) => (
          authenticated
            ? <PComponent {...props} />
            : <Redirect to="/login" />
        )}
      />
    </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    auth: state.auth,
  };
};

export const AuthorizedRoute = connect(
  mapStateToProps,
)(CAuthorizedRoute);
