import React from 'react'
import { ListItem, ListItemText, Button} from 'material-ui'

const Item = ({id, type, votes, onListItemClick, onVoteClick, onVerifyClick}) => {
	return (
		<ListItem button onClick={() => onListItemClick(id)}>
			<ListItemText primary={id} />
			<Button style={{margin: 10}} variant="raised" color="primary" onClick={(e) => {
				e.stopPropagation()
				onVoteClick(id)
				}
			}> Vote ! </Button>
			<Button style={{margin: 10}} variant="raised" color="default" onClick={(e) => {
				e.stopPropagation()
				onVerifyClick(id)
				}
			}> Verify ! </Button>
		</ListItem>
	)
}

export default Item