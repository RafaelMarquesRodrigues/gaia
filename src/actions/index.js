let nextProductId = 0

export const addProduct = (name, brand) => {
	return {
		type: 'ADD_PRODUCT',
		id: nextProductId++,
		name,
		brand
		//verified:false?
	}
}

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
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