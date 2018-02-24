import { combineReducers } from 'redux'
import products from './products'
import visibilityFilter from './visibilityFilter'

const gaiaApp = combineReducers({
	products,
	visibilityFilter
})

export default gaiaApp