import React, { Fragment } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'


const formatData = (data, groupFilter, groupAttr, fieldFilter) => {
	let products = []
	let groupSize = []

	data.forEach(product => {
		if(fieldFilter(product)){
			if(products.filter(p => groupFilter(product) === groupFilter(p)).length === 0){
				groupSize[groupFilter(product)] = 1
				products.push(product)
			} else{
				groupSize[groupFilter(product)]++
			}
		}
	})

	products.forEach(product => product[groupAttr] = groupSize[groupFilter(product)])

	console.log(products)
	return products
}

const productsByType = (array, filter) => formatData(array, (p) => p.type, 'amount', filter)

const Chart = ({data, filter}) => {
	console.log(filter)

	if(!data){
		return (
			<Fragment>
				<h1>no data</h1>
			</Fragment>
		)
	}

	return (
		<Fragment>
			<ResponsiveContainer width={'90%'} height={300}>
				<BarChart data={productsByType(data, filter)}>
				  <XAxis dataKey="type"/>
				  <YAxis type="number" domain={[0, 20]}/>
				  <Bar type="monotone" dataKey="amount" fill="#8884d8" animationEasing="ease-in"/>
				</BarChart>
			</ResponsiveContainer>
		</Fragment>
	)
}

export default Chart