import React from 'react'
import Item from './Item'
import List from 'material-ui/List'

const ItemList = ({items, onListItemClick, onVoteClick, onVerifyClick}) => {

	return (
	<List style={{overflow: 'auto', maxHeight: 400}}>
		{
			items && items.slice()
			.map(item => <Item key={item.id} {...item} onListItemClick={onListItemClick} onVoteClick={onVoteClick} onVerifyClick={onVerifyClick}/>)
		}
	</List>
	)
}

export default ItemList