import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import './CustomerCart.scss'

export default function CustomerCart(props) {
  const { cart } = props
  const [totalCost, setTotalCost] = useState(0)

  // useEffect(() => {

  // }, [])
  
  return (
    <div className='customer-cart'>
      {cart.length >= 1 ? <h3 className='cart-heading'>Your Cart</h3> : <h3 className='cart-heading'>Your Cart Is Empty.</h3>}
      {(cart && cart.length >= 1) &&
        <>
          <p className='cart-note'>Please review your cart before checking out.</p>
          <hr />
          <div className='cart-items'>
          {cart.map((cartItem, index) => {
            const { product, quantity } = cartItem
            
            return (
                <div className="cart-item" key={`cart-item-${index}`}>
                  <div className="product-info">
                    <img src={product.imageUrls[0]} alt='' />
                    <Link to={`/products/${product._id}`}         className='product-brand-name'>
                        {`${product.brand} ${product.productName}`}
                    </Link>
                  </div>
                <div className="product-quantity">
                  <button className="product-delete-btn">Delete</button>
                  <Counter quantity={quantity} setQuantity={() => {}} />
                  <p className="product-price">${product.price}</p>
                </div>
                </div>
              )
            })}
            <button className="empty-cart">Empty Cart</button>
          </div>
          <div className="promotional-code">
          <p>Have a promotional code?</p>
            <span>
            <input
              placeholder='Enter Here'
              value=''
              readOnly
            />
              <button>Apply</button>
            </span>
          </div>
          <div className="cart-checkout">
          <h4 className="checkout-cost">Est. Total: ${totalCost}</h4>
          <button className="checkout-btn">Checkout</button>
          </div>
        </>
      }
    </div>
  )
}
