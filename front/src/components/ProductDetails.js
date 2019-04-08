import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ProductDetailsCard from "./ProductDetailsCard";
import FarmStoryCard from "./FarmStoryCard";

class ProductDetails extends React.Component {
  state = {
    product: []
  };
  componentDidMount() {
    fetch(
      "http://localhost:8000/items/GetPricingItem/" +
        this.props.params["product"]
    )
      .then(data => data.json())
      .then(json => {
        this.setState({
          product: json
        });
      })
      .catch(error => {
        // error network or json handling
      });
  }
  // handleChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  // handleOpen = () => {
  //   this.setState({ open: true });
  // };

  addDidClick = () => {
    this.setState({
      product: {
        ...this.state.product,
        qty: (this.state.product.qty || 0) + 1
      }
    });
  };

  removeDidClick = () => {
    this.setState({
      product: {
        ...this.state.product,
        qty: (this.state.product.qty || 1) - 1
      }
    });
  };

  selectUnit = selectedUnit => {
    this.setState({
      product: {
        ...this.state.product,
        unit: selectedUnit
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Grid
            container
            spacing={24}
            style={{
              paddingRight: 10,
              paddingLeft: 10
            }}
          >
            <Grid item xs={12}>
              <Link
                to="/"
                style={{
                  color: "B9B6B6",
                  textDecoration: "none"
                }}
              >
                <h4
                  style={{
                    paddingTop: 60,
                    paddingLeft: 20
                  }}
                >
                  Home > Category > Product
                </h4>
              </Link>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={8} md={8}>
                <ProductDetailsCard
                  product={this.state.product}
                  addDidClick={this.addDidClick}
                  removeDidClick={this.removeDidClick}
                  selectUnit={this.selectUnit}
                  key={this.state.product.id}
                />
              </Grid>
              <Grid item xs={4} md={4}>
                <FarmStoryCard />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductDetails;
