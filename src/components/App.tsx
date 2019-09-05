import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Todos } from "./Todos";
import { Login } from "./Login";
import { ProtectedRoute } from "./auth/AuthorizedRoute";
import {
  IAuthStatus,
  AuthClearAction,
  IAuthClearAction
} from "../actions/auth";
import { connect } from "react-redux";
import { IStoreState } from "../reducers";
import Button from "./Button";
import { Dispatch } from "redux";

interface IAppProps {
  auth: IAuthStatus;
  clearAuth: () => IAuthClearAction;
}

export class CApp extends Component<IAppProps> {
  render() {
    const {
      auth: { authenticated },
      clearAuth
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
          <ProtectedRoute path="/protected" protectedComponent={Todos} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: IStoreState) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearAuth: () => dispatch(AuthClearAction())
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CApp);
