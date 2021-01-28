import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { searchProduct } from '../store/actions/productActions'


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {mobile: false}

    this.handleSearch = this.handleSearch.bind(this)
    this.mobileSearch = this.mobileSearch.bind(this)
    this.mobileBack = this.mobileBack.bind(this)

  }
  handleSearch(e) {
    this.props.searchProduct(e.target.value)
  }

  mobileSearch(e) {
    e.preventDefault()
    this.setState({mobile: true})
  }

  mobileBack(e) {
    e.preventDefault()
    this.setState({mobile: false})
  }
  
  render() {
    const search = (
      <div className="search">
        <div
          className="mobile-search"
          onClick={this.mobileSearch}
        >
          <img
            src={require("../images/search-green.png")}
            alt="search"
          />
        </div>
        <form action="#" method="get" className={ this.state.mobile ? "search-form active" : "search-form" }>
          <div
            className="back-button"
            onClick={this.mobileBack}
          >
            <img
              src={require("../images/back.png")}
              alt="back"
            />
          </div>
          <input
            type="search"
            ref="searchBox"
            placeholder="მოიძიე რაიმე ..."
            onChange={this.handleSearch}
            className="search-keyword"
          />
          <button className="search-button" type="submit" disabled={true}/>
        </form>
      </div>
    )

    return (
      <header>
        <div className="container">
          <Link to="/">
            <div className="brand">
              <h1>ვეგ-ვები</h1>
            </div>
          </Link>
          
          {this.props.showSearch && search}
          <div className="cart">
            <Link to="/cart">
              <div
                className="cart-icon"
                href="#"
                ref="cartButton"
              >
                <img
                  src={require("../images/bag.png")}
                  alt="Cart"
                />
                <span className="cart-count">{this.props.totalItems}</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  totalItems: state.totalItems,
  totalPrice: state.totalPrice,
  showSearch: state.showSearch
});

const mapDispatchToProps = dispatch => ({
  searchProduct: (term) => {dispatch(searchProduct(term))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


