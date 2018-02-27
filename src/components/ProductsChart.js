import React from 'react'
import PropTypes from 'prop-types'

import { BarChart, XAxis, YAxis, Bar} from 'recharts'

const groupBy = (array, groupFilter, groupAttr) => {
	let products = []
	let groupSize = []

	array.forEach(product => {
		if(products.filter(p => groupFilter(product) === groupFilter(p)).length === 0){
			groupSize[groupFilter(product)] = 1
			products.push(product)
		} else{
			groupSize[groupFilter(product)]++
		}
	})

	products.forEach(product => product[groupAttr] = groupSize[groupFilter(product)])

	console.log(products)
	return products
}

const productsByName = (array) => groupBy(array, (p) => p.name, 'amount')

export const ProductsChart = ({ products, onProductClick }) => (

	<ul>
		<BarChart width={600} height={300} data={productsByName(products)}>
	  <XAxis dataKey="name" />
	  <YAxis />
	  <Bar type="monotone" dataKey="amount" barSize={30} fill="#8884d8"
	    label="test"/>
	</BarChart>
	</ul>
)

ProductsChart.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			verified: PropTypes.bool.isRequired,
			name: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onProductClick: PropTypes.func.isRequired
}
