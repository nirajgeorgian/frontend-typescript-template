import { Reducer, AnyAction } from 'redux'
import { combineReducers } from 'redux-immutable'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router/immutable'

import appReducer from 'containers/app/reducer'
import authReducer from 'libs/auth/reducer'

/*
 * connectRouter
 * Creates the main reducer with the dynamically injected ones
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */
export const history = createBrowserHistory()
// export interface IInjectedReducers extends Reducer<any, AnyAction> {}
export const createRootReducer = (injectedReducers?: Reducer<any, AnyAction>) => {
	return combineReducers({
		router: connectRouter(history),
		app: appReducer,
		auth: authReducer,
		...injectedReducers
	})
}

export default createRootReducer()
