import React, {Component} from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import Product from './Product';
import { showSearch } from '../store/actions/productActions'


class Cart extends Component {

  constructor(props) {
    super(props);

    this.props.showSearch(false)

    this.state = {
      cartList: this.props.cartList
    }
    this.callNewCart = this.callNewCart.bind(this)
    this.checkoutHandler = this.checkoutHandler.bind(this)

  }

  callNewCart() {
    this.setState({cartList: this.props.cartList})
  }

  checkoutHandler() {
    alert('Checkout procedure')
  }

  render() {
    let productsData;

    productsData = Object.keys(this.state.cartList)
      .map(id => {
        return (
          <Product
            key={id}
            price={this.props.cartList[id].price}
            name={this.props.cartList[id].name}
            image={this.props.cartList[id].image}
            id={this.props.cartList[id].id}
            quantity={this.props.cartList[id].quantity}
            quantity_type={this.props.cartList[id].quantity_type}
            quantity_single={this.props.cartList[id].quantity_single}
            fromCart={true}
            callNewCart={this.callNewCart}
          />
        );
      })
    const noItems = (
      <div className="empty-cart">
        <img
          src="https://www.pngkey.com/png/full/365-3654131_cart-empty-image-your-cart-is-empty.png"
          alt="empty-cart"
        />
        <h2>Your Cart is empty!</h2>
        <Link to='/'>
          <button type="button">
            Return to the Store
          </button>
        </Link>
      </div>
    )
    // <h1 className="empty-cart">No items in your cart </h1>
    const checkoutButton = (
      <div className="checkout">
      <button type="button" onClick={this.checkoutHandler}>
        CHECKOUT
      </button>
      </div>
    )
    let view
    if (Object.keys(this.state.cartList).length > 0) {
      view = (
        <div>
          <div className="total">ჯამში: ${this.props.total}</div>
          <div className="products">{productsData}</div>
          {checkoutButton}
        </div>
      )
    } else {
      view = noItems
    }
    return (
      <div>
        <div className="products-wrapper">
          {view}
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cart,
  total: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  showSearch: (value) => {dispatch(showSearch(value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
