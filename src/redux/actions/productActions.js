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

export function createProductSuccess(products) {
  return {
    type: actionTypes.CREATE_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function updateProductSuccess(products) {
  return {
    type: actionTypes.UPDATE_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        savedProduct.id
          ? dispatch(updateProductSuccess(saveProduct))
          : dispatch(createProductSuccess(saveProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3001/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function handleResponse(response) {
  if (response.ok) return response.json;
  const error = await response.text();
  throw new Error(error);
}

export async function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}
