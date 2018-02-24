const products = (state = [], action) => {
	switch(action.type) {
		case 'ADD_PRODUCT':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					brand: action.brand,
					verified: false
				}
			]
		case 'VERIFY_PRODUCT':
			return state.map(product => 
				(product.id === action.id)
					? {...product, verified: true}
					: product
			)
		default:
			return state
	}
}

export default products