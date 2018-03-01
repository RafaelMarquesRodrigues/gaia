import React from 'react'
import PropTypes from 'prop-types'
import { TableCell,TableRow } from 'material-ui/Table';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


const TableProduct = ({ classes, id, type, brand, verified, addedAt, onClick }) => (
  <TableRow key={id} >
    <TableCell>{id}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>{brand}</TableCell>
    <TableCell>{addedAt.toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"})}</TableCell>
    <TableCell>
      <Button onClick={() => onClick(id)} variant={verified ? "flat" : "raised"} 
              color={verified ? "primary" : "secondary"}
              className={classes.button}>
        {verified ? "Verified !" : "Verify"}
      </Button>
    </TableCell>
  </TableRow>
)

export default withStyles(styles)(TableProduct)