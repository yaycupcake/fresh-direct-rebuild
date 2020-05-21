import React from 'react'
import ProductCards from '../../../Reusable/ProductCards'
import Nav from '../../shared/Nav'
import Footer from '../../shared/Footer'

export default function CustomerList(props) {
  return (
    <div>
      <h3 className="product-category">{props.match.params.category}</h3>
      <div className="shop-by">
        <span>Shop By:</span>
      </div>
      <ProductCards />
    </div>
  )
}
