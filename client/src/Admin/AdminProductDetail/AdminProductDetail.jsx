import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../shared/Layout'
import { getProduct, updateProduct, deleteProduct } from '../../services/product'
import './AdminProductDetail.scss'

export default function ProductDetail(props) {
  const [product, setProduct] = useState(null)
  
  const [imageUrls, setImageUrls] = useState([])
  const [newImage, setNewImage] = useState('')

  const [updated, didUpdate] = useState(false)
  const [deleted, didDelete] = useState(false)
  
  const { id } = props.match.params

  useEffect(() => {
    const productEffect = async () => {
      const productData = await getProduct(id)
      if (productData) {
        setProduct(productData)
        setImageUrls(productData.imageUrls)
      }
    }
    productEffect()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  const addImage = async (event) => {
    event.preventDefault()
    await setImageUrls([...imageUrls, newImage])
    setNewImage('')
  }

  const deleteImage = async (event) => {
    event.preventDefault()
    const iurls = imageUrls
    iurls.splice(event.target.id.split('-')[2], 1)
    await setImageUrls([...iurls])
  }

  const handleImageUrl = (event) => {
    setNewImage(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const eventName = event.target.name
    if (eventName === 'save') {
      const updated = await updateProduct(id, { ...product, imageUrls: imageUrls })
      didUpdate({ updated })
    } else if (eventName === 'delete') {
      const deleted = await deleteProduct(id)
      didDelete({ deleted })
    }
  }

  if (deleted) {
    return <Redirect to={`/admin/products/`} />
  }

  return (
    <div user={props.user}>
      {updated && <h4>Product Updated</h4>}
      {product &&
        <div className="product-info">
          <h1>Product Details: {`${product.brand} ${product.productName}`}</h1>
          <h3>Images</h3>
          <form className='image-form' onSubmit={addImage}>
            <label>Add Image</label>
            <input
              id='add-image'
              placeholder='Image URL'
              value={newImage}
              onChange={handleImageUrl}
              required
            />
            <button>+</button>
          </form>
          <div className="product-images">
            {imageUrls && imageUrls.map((image, idx) => {
              return (
                <React.Fragment key={`image${idx}`}>
                  <div className="product-image">
                    <img src={image} width='100' height='100' />
                    <button id={`delete-image-${idx}`} onClick={deleteImage}>x</button>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <form >
            {Object.entries(product).map((productEntry, idx) => {
              const excludeFields = ['_id', '__v', 'createdAt', 'updatedAt', 'imageUrls']
              return (
                <React.Fragment key={`${idx}`}>
                  {!excludeFields.includes(productEntry[0]) &&
                    <>
                      <label className='info-line'>
                        {productEntry[0]}:
                        <input
                        className="info-field"
                          name={productEntry[0]}
                          value={productEntry[1]}
                          type="text"
                          onChange={handleChange}
                        />
                      </label>
                    </>
                  }
                </React.Fragment>
              )
            })}
          <button type='submit' className='save' name='save' onClick={handleSubmit}>Save</button>
          <button type='submit' className='delete' name='delete' onClick={handleSubmit}>Delete</button>
          </form>
        </div>
      }
    </div>
  )
}
