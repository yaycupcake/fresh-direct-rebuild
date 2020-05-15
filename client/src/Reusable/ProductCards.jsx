import React, { Component } from 'react';
// import './ProductCards.css';
import ProductCard from './ProductCard'
import { getProducts } from '../services/product'
import Layout from '../Admin/shared/Layout'

class ProductCards extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products })
  }

  render() {

    const CARDS = this.state.products.reverse().map((product, index) =>
      index < 8 ? <ProductCard _id={product._id} productName={product.productName} imageUrl={product.imageUrls[0]} key={index} /> : null
    )

    return (
      <Layout user={this.props.user}>
      <div className="product-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
      </Layout>
    )
  }
}

export default ProductCards