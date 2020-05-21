import React from 'react';
import './ProductCard.scss';
import { Link, withRouter } from 'react-router-dom'
import addCart from '../assets/icons/addCart.png'

const ProductCard = (props) => {
  console.log(props)
  const isAdmin = props.match.path.includes('admin') ? true : false
  return (
    <div className="product-card">
      <Link className="card" to={isAdmin ? `/admin/products/${props._id}` : `/products/${props._id}`}>
        <div className='container'>
          <img className="product-card-image" src={props.imageUrl} alt={props.productName} />
          <span className='brand'>{props.product.brand}</span>
          <span className='product'>{props.product.productName}</span>
          <span className='misc'></span>
          <span>
            <span className='price-size'>${props.product.price} {props.product.size}</span>
            {props.product.unitPrice ? <span className='unit-price'>{props.product.unitPrice}</span> : null}

          </span>
        </div>
        {isAdmin &&
          <div className="product-card-name">View and Edit</div>}
        {!isAdmin &&
          <div className='cart-container'><img className='shopping-cart' src={addCart} /></div>}
      </Link>
    </div>
  )
}

export default withRouter(ProductCard)