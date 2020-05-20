import React, { Component } from 'react';
// import './ProductCards.css';
import ProductCard from './ProductCard'
import { withRouter } from 'react-router-dom'
import { getProducts } from '../services/product'
// import Layout from '../Admin/shared/Layout'
import './ProductCards.scss'

class ProductCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products })
  }

  

  render() {

    const isAdmin = this.props.match.path.includes('admin') ? true : false

    console.log(this.props)

    const FEATURE_CARDS = this.state.products.map((product, index) => {
      if (index <= 1) {
        return <ProductCard _id={product._id} productName={product.productName} imageUrl={product.imageUrls[0]} key={index} />
      }
    }
    )

    const FEATURE_CARDS_2 = this.state.products.map((product, index) => {
      if (index >= 2 && index <= 3 ) {
        return <ProductCard _id={product._id} productName={product.productName} imageUrl={product.imageUrls[0]} key={index} />
      }
    }
    )

    const selectedFeatureCards = this.props.feature === 'top' ? FEATURE_CARDS : FEATURE_CARDS_2
  

    const CARDS = this.state.products.reverse().map((product, index) =>
      <ProductCard _id={product._id} productName={product.productName} imageUrl={product.imageUrls[0]} key={index} />
    )

    return (

      <div className="product-cards">
        {/* <div className="category">CATEGORY: need to add category logic</div> */}
        <div className="cards">
          {isAdmin ? CARDS : selectedFeatureCards}
        </div>
      </div>
    )
  }
}

export default withRouter(ProductCards)