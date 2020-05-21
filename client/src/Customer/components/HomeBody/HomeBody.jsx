import React from 'react'
import './HomeBody.scss'
import ProductCards from '../../../Reusable/ProductCards'

export default function HomeBody(props) {
  return (
    <div className='home-body'>
      <ProductCards feature={props.feature} />
      <button className="view-all">View All</button>
      {/* <div className='burst'>
        <div className='overlay'>
          <h2>It's Back</h2>
        </div>
      </div> */}
    </div>
  )
}
