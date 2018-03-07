import React from 'react'
import { Button, Grid, Card, CardContent } from 'material-ui'
import ItemDetails from './ItemDetails'

const handleInput = (input, onClick) => {
	if(!input.value | !input.value.trim())
		return
	
	onClick(input.value)
}

const ItemSearch = ({onSearchClick, currentSearchItems}) => {
	let input = ''

	return (
		<Grid container direction={'column'}>
			<Grid item>
				<Grid container justify={'space-between'}>
					<input name="item_search_input" ref={node => input = node}/>
					<Button variant="raised" color="primary" 
							onClick={() => handleInput(input, onSearchClick)}> 
						Search
					</Button>
				</Grid>
			</Grid>
			<Grid item>
				<Card>
					<CardContent>
					{
						currentSearchItems ?

						currentSearchItems.slice()
						.map(i => <ItemDetails key={i.id} item={i}/>)

						: "Item not found"
					}
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	)
}

export default ItemSearch