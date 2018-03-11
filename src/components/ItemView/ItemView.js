import React from 'react'
import { Grid, Paper, Slide } from 'material-ui'
import AddItem from './AddItem'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import ItemSearch from './ItemSearch'

const ItemView = ({addItem, data, showDetails, verifyItem, searchItem, currentItem}) => {

	return(
        <Grid container>
            <Grid item xs={6} lg={6}>
                <Paper style={{padding: 30, margin: 5}}>
                    <AddItem onClick={addItem}/>
                </Paper>
                <Paper style={{padding: 30, margin: 5}}>
                    <ItemList items={data} 
                        onListItemClick={showDetails} 
                        onVerifyClick={verifyItem}/>
                </Paper>
            </Grid>
            <Grid item xs={6} lg={6}>
                <Paper style={{padding: 30, margin: 5}}>
                    <ItemSearch onSearchClick={searchItem}/>
                </Paper>
                {/*<Slide direction="right" in={true} mountOnEnter unmountOnExit>*/}
                    <Paper style={{padding: 30, margin: 5}}>
                        <ItemDetails item={currentItem} />
                    </Paper>
                {/*</Slide>*/}
            </Grid>
        </Grid>
    )
}

export default ItemView