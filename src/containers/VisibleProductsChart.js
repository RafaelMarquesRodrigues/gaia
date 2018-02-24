import { connect } from 'react-redux'
import { verifyProduct } from '../actions'
import { ProductsChart } from '../components/ProductsChart'

const getVisibleProducts = (products, filter) => {
	switch(filter) {
		case 'SHOW_VERIFIED': 
			return products.filter(p => p.verified)
		case 'SHOW_ALL':
		default:
			return products
	}
}

const mapStateToProps = state => {
	return {
		products: getVisibleProducts(state.products, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onProductClick: id => {
			dispatch(verifyProduct(id))
		}
	}
}

const VisibleProductsChart = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsChart)

export default VisibleProductsChart