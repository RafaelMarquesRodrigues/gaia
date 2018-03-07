import React, { Component } from 'react';

import ChartView from './components/ChartView/ChartView'
import ItemView from './components/ItemView/ItemView'
import { updateItem, searchByField, search, listenToCollection, addToCollection } from './components/api'

import { Button, AppBar, Toolbar, Typography } from 'material-ui'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'firebase/firestore'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: null,
      unsubscribe: null,
      currentItemId: null,
      currentSearchItems: null,
      showDetails: false,
      filterChecked: false,
      filter: f => true
    }

    this.addItem = this.addItem.bind(this)
    this.showDetails = this.showDetails.bind(this)
    this.verifyItem = this.verifyItem.bind(this)
    this.searchItem = this.searchItem.bind(this)
    this.handleItemFilter = this.handleItemFilter.bind(this)
  }

  componentDidMount(){
    let listener = listenToCollection('products', products => {
      this.setState({
        data: products
      })
    }, err => console.log(err))

    this.setState({
      unsubscribe: listener
    })
  }

  componentWillUnmount(){
    this.state.unsubscribe()
  }

  verifyItem(id) {
    updateItem('products', id, {'verified': true})
    .catch(err => console.log(err))
  }

  addItem(type, brand){
    addToCollection('products', type, brand)
    .then(() => console.log('added !test'))
    .catch((err) => console.log('error adding product ' + err))
  }

  searchItem(id){
    searchByField('products', 'id', id).then(snapshot => {
      let items = []

      snapshot.forEach(doc => items.push(doc.data()))

        this.setState({
          currentSearchItems: items && items.length > 0 ? items : null,
        })

    }).catch(err => console.log(err))
  }

  showDetails(id){
    search('products', id).then(item => {

      this.setState({
        currentItemId: item.data().id,
        showDetails: true
      })
  
    }).catch(err => console.log(err))
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
      <Router>
        <div style={{overflow: 'hidden'}}>
          <AppBar position="static" color="default" style={{marginBottom: 20}}>
            <Toolbar>
              <Typography variant="title" color="inherit" style={{flex: 1}}>
                item voting
              </Typography>
              <Button style={{justify: 'flex-end'}} component={Link} to="/itemView">  home  </Button>
              <Button style={{justify: 'flex-end'}} component={Link} to="/chartView">  chart  </Button>
            </Toolbar>
          </AppBar>

          <Route path="/itemView"
            render={() => {
              return (
                <ItemView addItem={this.addItem}
                          data={this.state.data}
                          showDetails={this.showDetails}
                          verifyItem={this.verifyItem}
                          searchItem={this.searchItem}
                          currentItem={this.state.currentItemId ? 
                                      this.state.data.find(n => n.id === this.state.currentItemId)
                                      : null }
                          currentSearchItems={this.state.currentSearchItems}/>
                )
            }}
          />

          <Route path="/chartView" 
            render={() => {
              return(
                <ChartView filterChecked={this.state.filterChecked} 
                           handleItemFilter={this.handleItemFilter}
                           data={this.state.data} 
                           filter={this.state.filter}/>
                )
            }}
          />

        </div>
      </Router>
    )
  }
}

export default App;
