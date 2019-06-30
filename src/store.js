import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import searchReducer from './services/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    search: searchReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk
  )
  // other store enhancers if any
)

const store = createStore(rootReducer, enhancer)

export default store
