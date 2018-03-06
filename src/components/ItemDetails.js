import React, { Fragment } from 'react'
import { Typography } from 'material-ui'


const ItemDetails = ({item}) => {
	if(!item){
		return (
			<Fragment>
				<h1>click on item to see details...</h1>
			</Fragment>
		)
	}
	return (
		<div style={{textAlign: 'justify', padding: 10}}>
			<Typography variant="title">Item details</Typography>
			<Typography variant="subheading">id: {item.id}</Typography>
			<Typography variant="body2">type: {item.type}</Typography>
			<Typography variant="body2">brand: {item.brand}</Typography>
			<Typography variant="body2">votes: {item.votes}</Typography>
			<Typography variant="button">verified: {item.verified ? "verified" : "not verified"}</Typography>
		</div>
	)
}

export default ItemDetails