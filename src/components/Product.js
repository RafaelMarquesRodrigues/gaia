import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ onClick, id, name, brand, verified }) => (
  <li>
    <div onClick={onClick}>
      <h1>product {id}</h1>
      <ul>
        <li>{name}</li>
        <li>{brand}</li>
        <li>{verified === true ? 'true' : 'false'}</li>
      </ul>
    </div>
  </li>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired
}

export default Product