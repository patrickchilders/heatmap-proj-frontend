import { createStore } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from './reducer'

// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   applyMiddleware()
//   // other store enhancers if any
// )

const store = createStore(appReducer)
export default store