import { combineReducers } from 'redux'
import products from './products'
import productsFilter from './productsFilter'
import productsList from './productsList'

const gaiaApp = combineReducers({
	products,
	productsFilter,
	productsList
})

export default gaiaApp