import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  render() {
    return (
      <div>
        <Badge color="warning">Products </Badge>
        <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
                <td>{p.quantityPerUnit}</td>
                <td>{p.unitInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
