import React from 'react'
import { render } from '@testing-library/react'

import { AppProvider } from 'containers/context/app'
import { ResponsiveProvider } from 'containers/context/responsive'
import LinguiProvider from 'containers/context/lingui'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { BrowserRouter as Router } from 'react-router-dom'
import client from 'client'
import store from 'store'
import { history } from 'store/rootReducer'

const AllContextProviders: React.FC = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<AppProvider>
							<LinguiProvider>
								<ResponsiveProvider>{children}</ResponsiveProvider>
							</LinguiProvider>
						</AppProvider>
					</Router>
				</ConnectedRouter>
			</Provider>
		</ApolloProvider>
	)
}

const customRender = (ui: React.ReactElement<any>, options?: any) =>
	render(ui, { wrapper: AllContextProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
