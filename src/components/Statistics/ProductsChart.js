import React from 'react'
import PropTypes from 'prop-types'

import { BarChart, XAxis, YAxis, Bar} from 'recharts'

const groupBy = (array, groupFilter, groupAttr) => {
	let products = []
	let groupSize = []

	array.slice().forEach(product => {
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

const productsByType = (array) => groupBy(array, (p) => p.type, 'amount')

const ProductsChart = ({ products }) => (
	<ul>
		<BarChart width={450} height={250} data={productsByType(products)}>
	  <XAxis dataKey="type" />
	  <YAxis />
	  <Bar type="monotone" dataKey="amount" barSize={30} fill="#8884d8"
	    label="Products chart"/>
	</BarChart>
	</ul>
)

export default ProductsChart