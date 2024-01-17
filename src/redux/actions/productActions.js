import * as actionTypes from "./actionTypes";

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3001/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(getProductsIsScuccess(result)));
  };
}

export function getProductsIsScuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}
