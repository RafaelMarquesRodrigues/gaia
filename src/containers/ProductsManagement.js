import { connect } from 'react-redux'
import { verifyProduct } from '../actions'
import { ProductsTable } from '../components/ProductsTable'

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

const ProductsManagement = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsTable)

export default ProductsManagement