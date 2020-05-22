import React, { useState, useEffect } from 'react'
import { getProduct } from '../../../services/product'
import Counter from '../Counter/Counter'
import Carousel from '../Carousel/Carousel'
import './CustomerProduct.scss'

export default function CustomerProduct(props) {
  // console.log(props);
  
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

  const addProduct = () => {
     props.addToCart({product, quantity})
  }

  return (
    <div>
      {product && 
        <div className="product-detail">
          <Carousel images={product.imageUrls} />
          <h4 className='product-price'>Total: <span className='money'>${total}</span></h4>
          <Counter className='counter' quantity={quantity} setQuantity={setQuantity} />
          <button className='bob' onClick={addProduct}>Add To Cart</button>
          <div className="product-detail-message"></div>
        </div>
      }
    </div>
  )
}
