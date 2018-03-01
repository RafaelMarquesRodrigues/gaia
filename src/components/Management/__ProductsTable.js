import React from 'react'
import TableProduct from './TableProduct'
import * as firebase from 'firebase'
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



const ProductsTable = ({ classes, products, onClick }) => (
  	<div>
	    <Paper className={classes.root}>
	      <Table className={classes.table}>
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
	          {products.map(n => {
	            return (
	            	<TableProduct key={n.id} {...n} onClick={onClick}/>
	            );
	          })}
	        </TableBody>
	      </Table>
	    </Paper>
	  </div>
)

export default withStyles(styles)(ProductsTable)