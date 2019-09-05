import React, { Component } from 'react'
import { IStoreState } from '../reducers';
import { connect } from 'react-redux';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home page!</h1>
			</div>
		)
	}
}
