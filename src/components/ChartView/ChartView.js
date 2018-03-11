import React, { Component } from 'react'
import { Grid, Paper, FormControlLabel, Select, MenuItem } from 'material-ui'
import Chart from './Chart'

const INITIAL_STATE = {
	filterName: 'all',
	filter: f => true
}

class ChartView extends Component {

	constructor(props){
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	handleChange = name => event => {

		console.log(event)

		let currentFilter = this.state.filter

		switch(event.target.value){

  			case 'verified':
  				console.log('onlyVerified !!')
	  			currentFilter = f => f.verified === true
	  			break
	  		default:
	  			currentFilter = f => true

  		}

    	this.setState({ 
    		filterName: event.target.value,
  			filter: currentFilter
  		})
  	}


	render(){
		const { data } = this.props

		console.log(this.state.filter)

		return (
				<Grid container>
					<Grid item xs={6} lg={6}>
						<Paper style={{textAlign: 'flex-start', padding: 30, margin: 5}}>
							<Grid container direction="column" justify="space-between">
								<Grid item>
								    <FormControlLabel label="only verified" control={
								      	<Select onChange={this.handleChange('filterName')} 
								      			value={this.state.filterName}>
								      		<MenuItem value="all"> All </MenuItem>
								      		<MenuItem value="verified"> Verified Only </MenuItem>
								      	</Select>
								    }/>
						  		</Grid>
								<Grid item>
								    <Chart data={data} filter={this.state.filter}/>
						  		</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
		)
	}
}

export default ChartView