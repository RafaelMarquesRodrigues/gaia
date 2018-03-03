
import React, { Component, Fragment } from 'react'
import ProductsChart from './ProductsChart'
import * as firebase from 'firebase'
import Paper from 'material-ui/Paper'

export default class StatisticsView extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			products: null,
			unsubscribe: null
		}
	}

	componentDidMount(){
		let listener = firebase.firestore()
		.collection('products')
		.orderBy("addedAt", "asc")
		.onSnapshot(snapshot => {
			let products = []
				
			snapshot.forEach(doc => {
				products.push(doc.data())
			})

			this.setState({
				products: products
			})
		}, err => console.log(err))

		console.log(this.state.products)

		this.setState({
			unsubscribe: listener
		})

	}

	componentWillUnmount(){
		this.state.unsubscribe()
	}


	render(){
		const { classes } = this.props
		if(!this.state.products){
			return (
				<div>
				</div>
			)
		}
		return (
			<Fragment>
				<ProductsChart products={this.state.products}/>
			</Fragment>
		)
	}
}