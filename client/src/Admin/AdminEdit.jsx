import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { getProduct, updateProduct } from '../services/product'

function AdminEdit(props) {
    const [input, updateInput] = useState('')
    const [product, updateProduct] = useState({
        brand: '',
        productName: '',
        size: '',
        price: '',
        unit: '',
        category: '',
        imgUrl: ''
    })


    let { id } = useParams

    async function handleSubmit(event) {
        event.preventDefault();
         const updateInput = await updateProduct(id, product);
        updateInput(input);
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="admin-update-brand"
                    placeholder="Brand"
                    value={brand}
                    name="brand"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
                <input
                    className="admin-update-productName"
                    placeholder="Product Name"
                    value={productName}
                    name="productName"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
                <input
                    className="admin-update-size"
                    placeholder="Size"
                    value={size}
                    name="size"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
                <input
                    className="admin-update-price"
                    placeholder="price"
                    value={price}
                    name="price"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
                <input
                    className="admin-update-unit"
                    placeholder="Unit"
                    value={unit}
                    name="unit"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
                <input
                    className="admin-update-category"
                    placeholder="Category"
                    value={category}
                    name="category"
                    required
                    onChange={(event) => updateproduct(event.target.value)}
                />
            </form>
            <form>
                <input
                    className="admin-update-imageUrl"
                    placeholder='Image Url'
                    value={imgUrl}
                    name='imgUrl'
                    type='text'
                    required
                    onChange={(event) => updateProduct(event.target.value)}
                />
            </form>
            <button type="submit">Save</button>

        </div>
    )
}
export default AdminEdit 