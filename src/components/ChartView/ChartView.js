import React from 'react'
import { Grid, Paper, FormControlLabel, Switch } from 'material-ui'
import Chart from './Chart'

const ChartView = ({match, filterChecked, handleItemFilter, data, filter}) => {
	return (
     	<Grid container spacing={24} justify={'center'}>
          	<Grid item xs={6} lg={6}>
			  	<Paper style={{padding: 10, margin: 10}}>
				    <FormControlLabel control={
				      	<Switch checked={filterChecked} 
				      			onChange={handleItemFilter} 
				      			value={filterChecked.toString()} 
				      			color="primary"/>
				    } label="only verified"
				    />
				    <Chart data={data} filter={filter}/>
			  	</Paper>
		  	</Grid>
		</Grid>

	)
}

export default ChartView