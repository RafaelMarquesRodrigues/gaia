import React, { Fragment } from 'react'
import '../css/App.css'
import Paper from 'material-ui/Paper'
import AddProduct from './Management/AddProduct'
import Grid from 'material-ui/Grid'

import HeaderAppBar from './HeaderAppBar'
import ManagementView from './Management/ManagementView'
import StatisticsView from './Statistics/StatisticsView'


const App = props => (
  <Fragment>
    <HeaderAppBar/>
    <Grid container>

      <Grid item xs={4}>
        <Paper elevation={4}>
          <AddProduct/>
        </Paper>
      </Grid>

      <Grid item xs={5}>
        <Paper elevation={4}>
          <StatisticsView/> 
        </Paper>
      </Grid>
      
      <Grid item xs={8}>
        <Paper elevation={4}>
          <ManagementView/>
        </Paper>
      </Grid>

    </Grid>
  </Fragment>
)

export default App