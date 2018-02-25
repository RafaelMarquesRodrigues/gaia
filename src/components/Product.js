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

export const Product = ({ classes, onClick, id, name, brand, verified }) => (
  <TableRow key={id} onClick={onClick}>
    <TableCell>{id}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{brand}</TableCell>
    <TableCell>
      <Button variant={verified ? "flat" : "raised"} 
              color={verified ? "primary" : "secondary"}
              className={classes.button}>
        {verified ? "Verified !" : "Verify"}
      </Button>
    </TableCell>
  </TableRow>
)

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired
}

export default withStyles(styles)(Product)