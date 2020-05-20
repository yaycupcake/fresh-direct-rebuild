import React, { Component } from 'react';
// import './ProductCards.css';
import ProductCard from './ProductCard'
import { getProducts } from '../services/product'
import Layout from '../Admin/shared/Layout'
import './ProductCards.scss'

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
      <ProductCard _id={product._id} productName={product.productName} imageUrl={product.imageUrls[0]} key={index} />
    )

    return (
      <Layout user={this.props.user}>
      <div className="product-cards">
        <div className="category">CATEGORY: need to add category logic</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
      </Layout>
    )
  }
}

export default ProductCards