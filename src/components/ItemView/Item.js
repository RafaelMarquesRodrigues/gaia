import React from 'react'
import { Grid, ListItem, ListItemText, Button} from 'material-ui'

const Item = ({id, type, votes, onListItemClick, onVerifyClick}) => {
	return (
		<ListItem button onClick={() => onListItemClick(id)}>
			<ListItemText primary={id} />
			<Grid container spacing={24} justify={'flex-end'}>
				<Grid item>
					<Button style={{margin: 10}} variant="raised" color="default" 
						onClick={(e) => {
							e.stopPropagation()
							onVerifyClick(id)
							}
					}> Verify ! </Button>
				</Grid>
			</Grid>
		</ListItem>
	)
}

export default Item