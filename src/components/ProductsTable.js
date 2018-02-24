import React from 'react'
import AddProduct from '../containers/AddProduct'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}

export const ProductsTable = ({ products }) => (
  	<div>
  		<AddProduct />
	    <Paper className={styles.root}>
	      <Table className={styles.table}>
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
	              <TableRow key={n.id}>
	                <TableCell>{n.id}</TableCell>
	                <TableCell>{n.name}</TableCell>
	                <TableCell>{n.brand}</TableCell>
	                <TableCell>{n.verified}</TableCell>
	              </TableRow>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
	  </div>
)

ProductsTable.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			verified: PropTypes.bool.isRequired,
			name: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
}