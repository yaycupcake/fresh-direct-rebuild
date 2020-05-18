import React, { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import { getProduct } from '../../services/product'
import './AdminProductDetail.scss'

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const productEffect = async () => {
      const { id } = props.match.params
      const productData = await getProduct(id)
      console.log(productData)
      if (productData) {
        setProduct(productData)
      }
    }
    productEffect()
  }, [])

  const productInfo =
    <div className="product-info">
      <div className='current-image'>
        <h1>Product Details</h1>
        <ul className="info-list">
          <li className='info-line'>Brand: {product && product.brand}</li>
          <li className='info-line'>Name: {product && product.productName}</li>
          <li className='info-line'>Size: {product && product.size}</li>
          <li className='info-line'>Price: {product && product.price}</li>
          <li className='info-line'>Unit: {product && product.unit}</li>
          <li className='info-line'>Sale Price: {product && product.salePrice}</li>
          <li className='info-line'>Unit Price: {product && product.unitPrice}</li>
          <li className='info-line'>Category: {product && product.category}</li>
          <li className='info-line'>Image URLs: {product && product.imageUrls}</li>
        </ul>
      </div>
      <div className='thumbnail-container'></div>
    </div>

  return (
    <Layout user={props.user}>
      {product && productInfo}
    </Layout>
  )
}
