import React from 'react'
import ManagementView from './Management/ManagementView'
import StatisticsView from './Statistics/StatisticsView'
import '../css/App.css'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import HeaderAppBar from './HeaderAppBar'
import Grid from 'material-ui/Grid'
import AddProduct from './Management/AddProduct'


const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});

class App extends React.Component {
  
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => this.setState({ mobileOpen: !this.state.mobileOpen })

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <HeaderAppBar/>
        
        <Grid container spacing={24}>
          <Grid item xs={2}>
              <AddProduct/> 
          </Grid>
          <Grid item xs={2}>
              <AddProduct/> 
          </Grid>
          <Grid item xs={2}>
              <AddProduct/> 
          </Grid>
          <Grid item xs={6}>
            <StatisticsView/> 
          </Grid>

          <Grid item xs={6}>
            <ManagementView/> 
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(App);