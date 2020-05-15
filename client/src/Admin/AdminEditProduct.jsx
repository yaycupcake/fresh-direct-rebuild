import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getProduct, updateProduct } from '../services/product'

function AdminEditProduct() {
    
    const [product, setProduct] = useState({
        brand: '',
        productName: '',
        size: '',
        price: '',
        unit: '',
        category: '',
        imgUrl: ''
    })


    

    useEffect(() => {
         let { id } = useParams
         const product = await getProduct(id)
         setProduct({ product })
         
    })

    async function handleChange(event) {
        const { name, value } =event.target
        setProduct({...product, [name]: value})
    }

    async function handleSubmit(event) {
        event.preventDefault();
         const created = await updateProduct(id, product);
        setCreated(created);
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="admin-update-brand"
                    placeholder="Brand"
                    value={product.brand}
                    name="brand"
                    required
                    onChange={handleChange}
                />
                <input
                    className="admin-update-productName"
                    placeholder="Product Name"
                    value={product.productName}
                    name="productName"
                    required
                    onChange={handleChange}
                />
                <input
                    className="admin-update-size"
                    placeholder="Size"
                    value={product.size}
                    name="size"
                    required
                    onChange={handleChange}
                />
                <input
                    className="admin-update-price"
                    placeholder="price"
                    value={product.price}
                    name="price"
                    required
                    onChange={handleChange}
                />
                <input
                    className="admin-update-unit"
                    placeholder="Unit"
                    value={product.unit}
                    name="unit"
                    required
                    onChange={handleChange}
                />
                <input
                    className="admin-update-category"
                    placeholder="Category"
                    value={product.category}
                    name="category"
                    required
                    onChange={handleChange}
                />
            </form>
            <form>
                <input
                    className="admin-update-imageUrl"
                    placeholder='Image Url'
                    value={product.imgUrl}
                    name='imgUrl'
                    type='text'
                    required
                    onChange={handleChange}
                />
            </form>
            <button type="submit">Save</button>

        </div>
    )
}
export default AdminEditProduct 