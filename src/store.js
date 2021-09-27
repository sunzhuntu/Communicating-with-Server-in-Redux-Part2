import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import productReducer from './reducers/productReducer';
import filterReducer from './reducers/filterReducer';
import thunk from 'redux-thunk'

const reducer = combineReducers({
    products: productReducer,
    filter: filterReducer
  })
  
  const store = createStore(
      reducer, 
      composeWithDevTools(
          applyMiddleware(thunk)
      )
    )
  console.log("the state is:", store.getState())

  export default store

