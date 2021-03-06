import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, SEARCH_PRODUCTS, SHOW_SEARCH, CHANGE_CATEGORY } from './types';
import data from '../../products.json'

export const getProducts = () => (dispatch, getState, axios) => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    })
};

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    product: product
  })
}

export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    product: product
  })
}

export const searchProduct = (term) => (dispatch) => {
  dispatch({
    type: SEARCH_PRODUCTS,
    term: term
  })
}

export const showSearch = (value) => (dispatch) => {
  dispatch({
    type: SHOW_SEARCH,
    value: value
  })
}

export const changeCategory = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_CATEGORY,
    value: value
  })
}