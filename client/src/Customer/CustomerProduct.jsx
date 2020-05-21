import React, { useState, useEffect } from 'react'
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import { getProduct } from '../services/product'
import Counter from './components/Counter/Counter'
import Carousel from './components/Carousel/Carousel'
import './CustomerProduct.scss'

export default function CustomerProduct(props) {
  const { id } = props.match.params
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [total, setTotal] = useState(null)

  useEffect(() => {
    const productCall = async () => {
      const selectedProduct = await getProduct(id)
      if (selectedProduct) {
        setProduct(selectedProduct)
        setTotal(selectedProduct.price)
      }
    }
    productCall()
  }, [])

  useEffect(() => {
    if (product) {
      setTotal(product.price * quantity)
    }
  }, [quantity])

  return (
    <div>
      <Nav />
        {product && 
        <div className="product-detail">
          <Carousel images={product.imageUrls} />
          <h4 className='product-price'>Total: ${total}</h4>
          <Counter quantity={quantity} setQuantity={setQuantity} />
          <button>Add To Cart</button>
          <div className="product-detail-message"></div>
        </div>
        }
      <Footer />
    </div>
  )
}
