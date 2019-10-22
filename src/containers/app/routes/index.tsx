import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SuspenseHomepage from 'containers/pages/homepage/loadable'
import Home from 'containers/pages/home/index'
import Layout from 'antd/lib/layout'

const { Content } = Layout

const AppRoutes: React.SFC = () => (
	<Content>
		<Switch>
			<Route path="/" component={SuspenseHomepage} exact={true} />
			<Route path="/home" component={Home} exact={true} />
		</Switch>
	</Content>
)

export default AppRoutes
