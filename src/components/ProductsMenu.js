import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const ProductsMenu = () => {
  return (
    <div>
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      ALL
    </FilterLink>
    {' | '}
    <FilterLink filter={VisibilityFilters.SHOW_VERIFIED}>
      VERIFIED
    </FilterLink>
  </div>
  )
}

export default ProductsMenu