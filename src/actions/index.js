//let nextProductId = 0

import * as firebase from 'firebase'

export const addProduct = (name, brand) => {

	const ref = firebase.database().ref('products').push()

	let product = Object.assign({}, {
		type: 'ADD_PRODUCT',
		name,
		brand,
		verified:false
	}, {id: ref.key})

	ref.set(product)

	return product
}

export const setProductsFilter = filter => {
	console.log('setting filter')
	firebase.database.ref('products').on('value', snap => {
		console.log('adding product')
		this.props.dispatch(addProduct(snap.val().name, snap.val().brand))
	})

	return {
		type: 'SET_PRODUCTS_FILTER',
		filter
	}
}

//bind to button
export const verifyProduct = id => {
	return {
		type: 'VERIFY_PRODUCT',
		id
	}
}

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_VERIFIED: 'SHOW_VERIFIED'
}