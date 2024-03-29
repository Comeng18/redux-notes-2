import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3001/categories";
    return fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch(getCategoriesIsScuccess(result)));
  };
}

export function getCategoriesIsScuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}
