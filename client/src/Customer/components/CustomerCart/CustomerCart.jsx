import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter'
import './CustomerCart.scss'

export default function CustomerCart(props) {
  console.log(props);
  const { cart } = props
  console.log(cart);

  const [totalCost, setTotalCost] = useState(null)

  useEffect(() => {

  }, [])
  
  return (
    <div className='customer-cart'>
      {cart > 1 ? <h3>Your Cart</h3> : <h3>Your Cart Is Empty.</h3>}
      {(cart && cart.length > 1) &&
        <>
          <p>Please review your cart before checking out.</p>
          <hr />
          <div className='cart-items'>
          {cart.map((cartItem) => {
            const { product, quantity } = cartItem
            
            return (
                <div className="cart-item">
                  <div className="product-info">
                    <img src={product.imageUrls[0]} alt='' />
                    {/* <div className="product-desc"></div> */}
                    {/* <h4 className='product-brand-name'>{`${product.brand} ${product.productName}`}</h4> */}
                    <Link to={`/products/${product._id}`}         className='product-brand-name'>
                        {`${product.brand} ${product.productName}`}
                    </Link>
                  </div>
                <div className="product-quantity">
                  <button className="product-delete-btn">Delete</button>
                  {/* <Counter quantity={quantity} /> */}
                  {/* <h4 className='product-price'>Total: <span className='money'>${total}</span></h4> */}
                  <p className="product-price-each">${product.price}/ea</p>
                </div>
                </div>
              )
            })}
            <button className="empty-cart">Empty Cart</button>
          </div>
          <div className="promotional-code">
          <p>Have a prpomotional code?</p>
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
          <h4 className="checkout-cost">Est. Total: ${totalCost ? totalCost : null}</h4>
          <button className="checkout-btn">Checkout</button>
          </div>
        </>
      }
    </div>
  )
}