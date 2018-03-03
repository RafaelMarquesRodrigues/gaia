import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import teal from 'material-ui/colors/teal'

export default props =>
  <Fragment>
    <AppBar position="static" style={{background: teal[500]}}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>