import React from 'react'
import AddProduct from '../containers/AddProduct'
import Product from './Product'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 700,
  },
})

export const ProductsTable = ({ classes, products, onProductClick }) => (

  	<div>
  		<AddProduct />
	    <Paper className={classes.root}>
	      <Table className={classes.table}>
	        <TableHead>
	          <TableRow>
	            <TableCell>ID</TableCell>
	            <TableCell>Name</TableCell>
	            <TableCell>Brand</TableCell>
	            <TableCell>Verified</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	          {products.map(n => {
	            return (
	            	<Product key={n.id} {...n} onClick={() => onProductClick(n.id)}/>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
	  </div>
)

ProductsTable.propTypes = {
	classes: PropTypes.object.isRequired,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			verified: PropTypes.bool.isRequired,
			name: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onProductClick: PropTypes.func.isRequired
	/*requerer onclick para o product verify*/
}

export default withStyles(styles)(ProductsTable)