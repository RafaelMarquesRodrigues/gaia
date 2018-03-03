
import React, { Component, Fragment } from 'react'

// firebase
import * as firebase from 'firebase'
import 'firebase/firestore'

// management components
import ProductsTable from './ProductsTable'
import TableSearch from './TableSearch'

export default class ManagementView extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			products: null,
			unsubscribe: null
		}
	}

	componentDidMount(){
		let listener = firebase.firestore().collection('products').onSnapshot(snapshot => {
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

	verifiyProduct(id) {
		console.log(id)
		firebase.firestore().collection('products').doc(id).update({
			verified: true
		})
		.catch(err => console.log(err))
	}

	render() {
		const { classes } = this.props

		if(!this.state.products){
			return (
				<Fragment>
					<TableSearch />
				</Fragment>
			)
		}
		return (
			<Fragment>
				<TableSearch />
				<ProductsTable products={this.state.products} onClick={this.verifiyProduct}/>
			</Fragment>
		)
	}
}