import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link className="card" to={`/admin/products/${props._id}`}>
        <img className="product-card-image" src={props.imageUrl} alt={props.productName} />
        <div>View</div>
      </Link>
    </div>
  )
}

export default ProductCard