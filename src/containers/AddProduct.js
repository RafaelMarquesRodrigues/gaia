import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions'

import '../css/ProductForm.css'
import 'material-ui/TextField'
import '../components/Product'

let AddProduct = ({ dispatch }) => {
  let name
  let brand
  let amount

  return (
    <div>
    	<form onSubmit={e => {
        e.preventDefault()

        if((name.value && brand.value) && 
          (!name.value.trim() || !brand.value.trim())){
          return
        }
        if(!amount.value){
          amount.value = 1
          console.log(amount.value)
        }
          
          while(amount.value-- !== 0){
            dispatch(addProduct(name.value, brand.value))
          }

          amount.value = ''
          name.value = ''
          brand.value = ''
        }}
      >
        <input
          ref={node => {
            name = node
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
    </div>
  )
}

AddProduct = connect()(AddProduct)

export default AddProduct