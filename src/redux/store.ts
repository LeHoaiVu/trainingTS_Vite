import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import type {} from 'redux-thunk/extend-redux'

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducers>
