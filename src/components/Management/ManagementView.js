
import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'

import AddProduct from './AddProduct'
import ProductsTable from './ProductsTable'
import * as firebase from 'firebase'
import 'firebase/firestore'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
})


class ManagementView extends Component {
	
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
				<div>
					<Paper className={classes.root} elevation={4}>
						<AddProduct />
					</Paper>
				</div>
			)
		}
		return (
			<div>
				<Paper className={classes.root} elevation={4}>
					<AddProduct />
					<ProductsTable classes={this.classes} products={this.state.products} onClick={this.verifiyProduct}/>
				</Paper>
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(ManagementView)