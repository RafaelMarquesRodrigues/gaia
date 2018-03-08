import React from 'react'
import { Grid, Paper, Slide } from 'material-ui'
import AddItem from './AddItem'
import ItemList from './ItemList'
import ItemDetails from './ItemDetails'
import ItemSearch from './ItemSearch'

const ItemView = ({match, addItem, data, showDetails, verifyItem, searchItem, currentItem, currentSearchItems}) => {
	return(
        <Grid container spacing={24}>
          <Grid item xs={6} lg={6}>
              <Paper style={{padding: 30, margin: 10}}>
                <AddItem onClick={addItem}/>
              </Paper>
            <Paper style={{padding: 20, margin: 10}}>
              <ItemList items={data} 
                        onListItemClick={showDetails} 
                        onVerifyClick={verifyItem}/>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <Paper style={{padding: 30, margin: 10}}>
                <ItemDetails item={currentItem} />
              </Paper>
            </Slide>
              <Paper style={{padding: 30, margin: 10}}>
                <ItemSearch onSearchClick={searchItem} 
                          currentSearchItems={currentSearchItems}/>
              </Paper>
          </Grid>
        </Grid>
    )
}

export default ItemView