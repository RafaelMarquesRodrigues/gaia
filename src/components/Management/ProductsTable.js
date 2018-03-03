import React, { Fragment } from 'react'
import * as firebase from 'firebase'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import TableProduct from './TableProduct'

const ProductsTable = ({ classes, products, onClick }) => (
  	<Fragment>
	      <Table>
	        <TableHead>
	          <TableRow>
	            <TableCell>ID</TableCell>
	            <TableCell>Name</TableCell>
	            <TableCell>Brand</TableCell>
	            <TableCell>Added at</TableCell>
	            <TableCell>Verified</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	        {
	        	products
	         	.slice(1, 5)
	         	.map(n => <TableProduct key={n.id} {...n} onClick={onClick}/>)
	        }
	        </TableBody>
	      </Table>
	  </Fragment>
)

export default ProductsTable