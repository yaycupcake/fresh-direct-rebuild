import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createProduct } from "../../services/product"
import './AddProduct.scss'


export default function AddProduct(props) {

  const [product, setProduct] = useState({
    brand: "",
    productName: "",
    size: "",
    price: "",
    unit: "",
    salePrice: "",
    unitPrice: "",
    category: "",
    imageUrls: []
  })

  const [isCreated, setIsCreated] = useState(null)

  const [fields, setFields] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({ ...product, [name]: value })
  }

  function handleChangeDynField(i, event) {
    const values = [...fields];
    console.log(values)
    values[i].values = event.target.value;
    setFields(values);
  }

  function handleAddField() {
    const values = [...fields];
    values.push({values: null});
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(fields)
    fields.map(field => product.imageUrls.push(field.values))
    console.log(product)
    const created = await createProduct(product)
    setIsCreated({ created })
  }

  if (isCreated) {
    return <Redirect to={`/admin/products/`} />
  }


  return (
      <div className="AddProduct">
        <form
          className="add-product-form"
          onSubmit={handleSubmit}
        >
          <input
            className="input-brand"
            placeholder="Brand"
            value={product.brand}
            name="brand"
            required
            onChange={handleChange}
          />
          <input
            className="input-product-name"
            placeholder="Product Name"
            value={product.productName}
            name="productName"
            required
            onChange={handleChange}
          />
          <input
            className="input-size"
            placeholder="Size"
            value={product.size}
            name="size"
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={product.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-unit"
            placeholder="Unit"
            value={product.unit}
            name="unit"
            onChange={handleChange}
          />
          <input
            className="input-sale-price"
            placeholder="Sale Price"
            value={product.salePrice}
            name="salePrice"
            onChange={handleChange}
          />
          <input
            className="input-unit-price"
            placeholder="Unit Price"
            value={product.unitPrice}
            name="unitPrice"
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="Category"
            value={product.category}
            name="category"
            onChange={handleChange}
          />

          <button type="button" className='add-button' onClick={() => handleAddField()}>
            Add Image URL
          </button>

          {fields.map((field, i) => {
            return (
              <div className='image-fields' key={`${field}-${i}`}>
                <input
                  maxLength='255'
                  className='input-image-urls'
                  type="text"
                  value={field.value} 
                  onChange={e => handleChangeDynField(i, e)}
                  placeholder="Add Another Image URL"
                />
                <button type="button" className="x-button" onClick={() => handleRemove(i)}>
                  x
            </button>
              </div>
            );
          })}
          <button
            type="submit"
            className="submit-button"
          >Save New Product</button>
        </form>
      </div>
  )
}
