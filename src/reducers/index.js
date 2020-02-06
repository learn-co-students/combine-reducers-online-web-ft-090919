import authorsReducer from './authorsReducer'
import booksReducer from './booksReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer
