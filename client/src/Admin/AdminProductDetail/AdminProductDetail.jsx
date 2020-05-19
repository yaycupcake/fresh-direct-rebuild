import React, { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import { getProduct, updateProduct } from '../../services/product'
import './AdminProductDetail.scss'

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  const { id } = props.match.params
  useEffect(() => {
    const productEffect = async () => {
      const productData = await getProduct(id)
      console.log(productData)
      if (productData) {
        setProduct(productData)
      }
    }
    productEffect()
  }, [])

//need to change to edited / isEdited?
const [created, setCreated] = useState ('')

function handleChange(event) {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
}

async function handleSubmit(event) {
    event.preventDefault();
    const created = await updateProduct(id, product);
    setCreated(created);
}

  const productInfo =
    <div className="product-info">
      <div className='current-image'>
        <h1>Product Details</h1>
        <ul className="info-list">
          <li className='info-line'>Brand: <input value={product && product.brand} className="info-field" type="text" /></li>
          <li className='info-line'>Name: <input value={product && product.productName} className="info-field" type="text" /></li>
          <li className='info-line'>Size: <input value={product && product.size} className="info-field" type="text" /></li>
          <li className='info-line'>Price: <input value={product && product.price} className="info-field" type="text" /></li>
          <li className='info-line'>Unit: <input value={product && product.unit} className="info-field" type="text" /></li>
          <li className='info-line'>Sale Price: <input value={product && product.salePrice} className="info-field" type="text" /></li>
          <li className='info-line'>Unit Price: <input value={product && product.unitPrice} className="info-field" type="text" /></li>
          <li className='info-line'>Category: <input value={product && product.category} className="info-field" type="text" /></li>
          <li className='info-line'>Image URLs: <input value={product && product.imageUrls} className="info-field" type="text" /></li>
        </ul>
        <button type='submit' className='save'>Save</button>
      </div>
      <div className='thumbnail-container'></div>
    </div>

  return (
    <Layout user={props.user}>
      {product && productInfo}
    </Layout>
  )
}
