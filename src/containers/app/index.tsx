import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { RootAction } from 'typesafe-actions'

import AppRoutes from 'containers/app/routes'
import AppFooter from 'containers/layout/footer'
import AppHeader from 'containers/layout/header'
import { makeSelectionApp } from 'containers/app/selector'
import { initializeAsync } from 'containers/app/action'

interface IAppProps {
	appInitialized: boolean
	appLoading: boolean
	appError: string | null
	initialize: () => void
}
// interface IAppState {}

class App extends Component<IAppProps, {}> {
	componentDidMount = () => {
		this.props.initialize()
	}

	render = () => {
		return (
			<div className="App">
				<AppHeader />
				<AppRoutes />
				<AppFooter />
			</div>
		)
	}
}

const mapStateToProps = makeSelectionApp
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => {
	return bindActionCreators(
		{
			initialize: initializeAsync.request
		},
		dispatch
	)
}
const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default withRouter(withConnect)
