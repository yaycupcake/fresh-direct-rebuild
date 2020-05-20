import React from 'react';
import './ProductCard.scss';
import { Link, withRouter } from 'react-router-dom'

const ProductCard = (props) => {
  console.log(props)
  const isAdmin = props.match.path.includes('admin') ? true : false
  return (
    <div className="product-card">
      <Link className="card" to={isAdmin ? `/admin/products/${props._id}` : `/products/${props._id}`}>
        <img className="product-card-image" src={props.imageUrl} alt={props.productName} />
        {isAdmin &&
          <div className="product-card-name">{props.productName} | View and Edit</div>}
      </Link>
    </div>
  )
}

export default withRouter(ProductCard)