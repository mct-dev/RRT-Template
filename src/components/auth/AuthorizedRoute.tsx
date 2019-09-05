import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from 'react-redux';
import { IAuthStatus } from '../../actions/auth';
import { IStoreState } from '../../reducers';

export interface IAuthorizedRouteProps extends RouteProps {
	auth: IAuthStatus;
	protectedComponent: React.ElementType;
}


export class CProtectedRoute extends Component<IAuthorizedRouteProps> {

	render() {
		const {
			auth: { authenticated },
			protectedComponent: PComponent,
			...rest } = this.props;
		return (
		<div>
			<Route
				{...rest}
				render={props => (
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
    auth: state.auth
  };
};

export const ProtectedRoute = connect(
	mapStateToProps
)(CProtectedRoute);