
import React, { Component } from 'react'

import ProductsChart from './ProductsChart'

import * as firebase from 'firebase'

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
})

class StatisticsView extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			products: null,
			unsubscribe: null
		}
	}

	componentDidMount(){
		let listener = firebase.firestore().collection('products')
		.orderBy("addedAt", "desc")
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
					<Paper className={classes.root} elevation={4}>
					</Paper>
				</div>
			)
		}
		return (
			<div>
					<Paper className={classes.root} elevation={4}>
						<ProductsChart products={this.state.products}/>
					</Paper>
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(StatisticsView)