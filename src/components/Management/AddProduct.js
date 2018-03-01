import React from 'react'
import 'material-ui/TextField'
import { withStyles } from 'material-ui/styles'
import * as firebase from 'firebase'
import 'firebase/firestore'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
})

class AddProduct extends React.Component {
  
  constructor(props){
    super(props)
  }

  addToDb(type, brand) {
    let doc = firebase.firestore().collection('products').doc()
    //console.log(doc.id + ' ' + type + ' ' + brand)
    //console.log(Date.now())
    doc.set({
      id: doc.id,
      type: type.value,
      brand: brand.value,
      verified: false,
      addedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => console.log('added !'))
    .catch((err) => console.log('error adding product ' + err))
  }

  render(){
    let type = ''
    let brand = ''
    let amount = ''
    const { classes } = this.props

    return (
      <Paper className={classes.root} elevation={4}>
        <form onSubmit={e => {
            e.preventDefault()

            if((type.value && brand.value) && 
              (!type.value.trim() || !brand.value.trim())){
              return
            }
            if(!amount.value){
              amount.value = 1
            }
            

            while(amount.value-- !== 0){
              this.addToDb(type, brand)
            }

            amount.value = ''
            type.value = ''
            brand.value = ''
          }}
        >
          <input
            ref={node => {
              type = node
            }}
          />
          <input
            ref={node => {
              brand = node
            }}
          />
          <input
            ref={node => {
              amount = node
            }}
          />
          <button type="submit">
            add
          </button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AddProduct)