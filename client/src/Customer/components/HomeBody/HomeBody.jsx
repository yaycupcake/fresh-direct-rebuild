import React from 'react'
import './HomeBody.scss'
import ProductCards from '../../../Reusable/ProductCards'

export default function HomeBody(props) {
  return (
    <div>
      <ProductCards feature={props.feature}/>
    </div>
  )
}
