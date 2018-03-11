import React, { Component } from 'react'
import { Button, Grid, TextField } from 'material-ui'

import teal from 'material-ui/colors/teal'


export default class ItemSearch extends Component {
	state = {
		input: ''
	}

	handleChange = option => event => {
        this.setState({
            [option]: event.target.value,
        })
    }
	
	handleInput = (input, onClick) => {
		if(!input | !input.trim())
			return
		
		onClick(input)
	}

	render(){
		const { onSearchClick } = this.props

		return (
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<TextField 
					id="item_search_input"
					label="Product search"
					margin="none"
					value={this.state.input}
					onChange={this.handleChange('input')}/>
				<Button variant="raised" style={{background: teal['200']}} 
						onClick={() => {
							this.handleInput(this.state.input, onSearchClick)
							this.setState({input: ''})
						}}> 
						Search
				</Button>
			</div>
		)
	}
}