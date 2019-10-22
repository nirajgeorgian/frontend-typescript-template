import { createAsyncAction } from 'typesafe-actions'
import { INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE } from 'libs/stays/constant'

export const initializeStaysAsync = createAsyncAction(INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE)<
	undefined,
	undefined,
	undefined
>()
