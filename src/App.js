import React, { Component } from 'react';
import './styles/App.css';
import ItemList from './components/ItemList'
import AddItem from './components/AddItem'
import Chart from './components/Chart'
import ItemDetails from './components/ItemDetails'
import Slide from 'material-ui/transitions/Slide';
import { Button, Switch, FormControlLabel } from 'material-ui'

import { Grid, AppBar, Toolbar, Typography, Paper } from 'material-ui'

import * as firebase from 'firebase'
import 'firebase/firestore'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: null,
      unsubscribe: null,
      currentItem: null,
      showDetails: false,
      filterChecked: false,
      filter: f => true
    }

    this.addItem = this.addItem.bind(this)
    this.voteOnItem = this.voteOnItem.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.verifyItem = this.verifyItem.bind(this)
    this.handleItemFilter = this.handleItemFilter.bind(this)
  }

  componentDidMount(){
    let listener = firebase.firestore().collection('products').onSnapshot(snapshot => {
      let products = []
        
      snapshot.forEach(doc => {
        products.push(doc.data())
      })

      this.setState({
        data: products
      })
    }, err => console.log(err))

    console.log(this.state.data)

    this.setState({
      unsubscribe: listener
    })

  }

  componentWillUnmount(){
    this.state.unsubscribe()
  }

  verifyItem(id) {
    console.log(id)
    firebase.firestore().collection('products').doc(id).update({
      verified: true
    })
    .catch(err => console.log(err))
  }

  addItem(_type, _brand){

    let doc = firebase.firestore().collection('products').doc()

    doc.set({
      id: doc.id,
      type: _type,
      brand: _brand,
      verified: false,
      votes: 0,
      addedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => console.log('added !test'))
    .catch((err) => console.log('error adding product ' + err))

  }

  voteOnItem(id){
    if(!id){
      console.log("Item ID not provided")
      return
    }

    let item = this.state.data.slice().find(n => n.id === id)

    if(!item){
      console.log("Item does not exist")
      return
    }

    console.log(item)

    firebase.firestore().collection('products').doc(item.id).update({
      votes: item.votes + 1
    })
    .catch(err => console.log(err))
  }

  searchItem(id){
    let items = this.state.data.filter(n => n.id === id)

    this.setState({
      currentSearchItems: items.length > 0 ? items : null,
    })

  }

  showDetails(id){
    let item = this.state.data.slice().find(n => n.id === id)

    this.setState({
      currentItem: item,
      showDetails: true
    })

  }

  handleItemFilter(){
    let checked = !this.state.filterChecked

    this.setState({
      filterChecked: !this.state.filterChecked,
      filter: checked ? f => f.verified === true : f => true
    })

  }

  render() {
    return (
      <div className="App">
          
          <AppBar position="static" color="default" style={{marginBottom: 12}}>
            <Toolbar>
              <Typography variant="title" color="inherit">
                item voting
              </Typography>
            </Toolbar>
          </AppBar>

        <Grid container spacing={16}>
          <Grid item xs={6} lg={6}>
            <Paper style={{padding: 10, margin: 5}}>
              <AddItem onClick={this.addItem}/>
            </Paper>
            <Paper style={{padding: 10, margin: 5}}>
              <ItemList items={this.state.data} onListItemClick={this.showDetails} onVoteClick={this.voteOnItem} onVerifyClick={this.verifyItem}/>
            </Paper>
          </Grid>
          <Grid item xs={6} lg={6}>
            <Paper style={{padding: 10, margin: 5}}>
              <FormControlLabel control={
                <Switch checked={this.state.filterChecked} onChange={this.handleItemFilter} value="verifyFilter" color="primary"/>
              }
              label="only verified"
              />
              <Chart data={this.state.data} filter={this.state.filter}/>
            </Paper>
            <Slide direction="right" in={this.state.showDetails} mountOnEnter unmountOnExit>
              <Paper style={{padding: 10, margin: 5}}>
                <ItemDetails item={this.state.currentItem} />
              </Paper>
            </Slide>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
