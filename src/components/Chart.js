import React, { Fragment } from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'


const formatData = (data, filter) => {
	let formatedData = []

	data.forEach(n => {
		if(filter(n)){
			formatedData.push({...n})
		}
	})

	return formatedData
}

const Chart = ({data, filter}) => {

	return (
		<Fragment>
			<BarChart width={600} height={300} data={formatData(data || [], filter)}>
			  <XAxis dataKey="type"/>
			  <YAxis type="number" domain={[0, 20]}/>
			  <Bar type="monotone" dataKey="votes" fill="#8884d8" animationEasing="ease-in"/>
			</BarChart>
		</Fragment>
	)
}

export default Chart