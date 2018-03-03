import React, { Fragment } from 'react'
import { TableCell,TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';

export default ({ classes, id, type, brand, verified, addedAt, onClick }) => 
  <Fragment>
    <TableRow key={id} >
      <TableCell>{id}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{brand}</TableCell>
      <TableCell>{addedAt ? addedAt.toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"}) : "Waiting for server time..."}</TableCell>
      <TableCell>
        <Button onClick={() => onClick(id)} variant={verified ? "flat" : "raised"} 
                color={verified ? "primary" : "secondary"}>
          {verified ? "Verified" : "Verify"}
        </Button>
      </TableCell>
    </TableRow>
  </Fragment>
