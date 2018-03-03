import React, { Component } from 'react'
//import 'material-ui/TextField'
import * as firebase from 'firebase'
import 'firebase/firestore'

import { TextField, Button } from 'material-ui'

//import TextField from 'material-ui/TextField';
//import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

export default class AddProduct extends React.Component {

  state = {
    type: '',
    brand: '',
    amount: ''
  }

  addToDb(type, brand) {
    let doc = firebase.firestore().collection('products').doc()
    //console.log(doc.id + ' ' + type + ' ' + brand)
    //console.log(Date.now())
    doc.set({
      id: doc.id,
      type: type,
      brand: brand,
      verified: false,
      addedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => console.log('added !'))
    .catch((err) => console.log('error adding product ' + err))
  }

  handleChange = option => event => {
    this.setState({
      [option]: event.target.value,
    });
  };

  render(){
    return (
        <form onSubmit={e => {
            e.preventDefault()

            if((this.state.type && this.state.brand) && 
              (!this.state.type.trim() || !this.state.brand.trim())){
              return
            }
            if(!this.state.amount){
              this.state.amount = 1
            }
            

            while(this.state.amount-- !== 0){
              this.addToDb(this.state.type, this.state.brand)
            }

            this.setState({
              amount: '',
              type: '',
              brand: '',
            })

          }}
        >
        <div>
          <TextField
            id="with-placeholder"
            label="Product type"
            placeholder="Required*"
            margin="normal"
            value={this.state.type}
            onChange={this.handleChange('type')}
          />
          <TextField
            id="with-placeholder"
            label="Product brand"
            placeholder=""
            margin="normal"
            value={this.state.brand}
            onChange={this.handleChange('brand')}
          />
          <TextField
            id="amoun"
            label="Amount"
            //placeholder="Amount"
            margin="normal"
            value={this.state.amount}
            onChange={this.handleChange('amount')}
          />
          <Button type="submit" variant="fab" mini color="secondary" aria-label="add">
          <AddIcon />
        </Button>
        </div>
      </form>
    )
  }
}
