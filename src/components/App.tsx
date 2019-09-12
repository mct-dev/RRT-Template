import { AuthorizedRoute } from "components/auth/AuthorizedRoute";
import Button from "components/Button";
import Home from "components/Home";
import { Login } from "components/Login";
import { Todos } from "components/Todos/Todos";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Dispatch } from "redux";
import {
  AuthClearAction,
  IAuthClearAction,
  IAuthStatus,
} from "store/actions/auth";
import { IStoreState } from "store/reducers";

interface IAppProps {
  auth: IAuthStatus;
  clearAuth: () => IAuthClearAction;
}

export class CApp extends Component<IAppProps> {
  public render() {
    const {
      auth: { authenticated },
      clearAuth,
    } = this.props;
    return (
      <Router>
        <div>
          {authenticated ? <Button onClick={clearAuth}>Log Out</Button> : null}
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Home} />
          <Route path="/login" component={Login} />
          <AuthorizedRoute path="/protected" protectedComponent={Todos} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearAuth: () => dispatch(AuthClearAction()),
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CApp);
