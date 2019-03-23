import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import ProductCard from "./ProductCard";
import CheckoutModal from "./CheckoutModal";
import ProductListContext from "../ProductListContext";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class ProductGrid extends React.Component {
  state = {
    spacing: "16",
    products: [],
    isCheckoutModalOpen: false,
    checkedoutProducts: []
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value
    });
  };

  handleOpenCheckoutModalClick = productId => {
    this.setState({
      // isCheckoutModalOpen: true,
      selectedProduct: this.state.products.find(p => p.id === productId)
    });
  };

  handleCheckoutModalClose = () => {
    this.setState({
      // isCheckoutModalOpen: false,
      selectedProduct: undefined
    });
  };

  handleCheckoutClick = () => {
    this.props.dispatch({
      type: "CHECKOUT_PRODUCT",
      product: this.state.selectedProduct
    });
    this.handleCheckoutModalClose();
  };

  componentDidMount() {
    fetch("http://localhost:8000/items/MostPopularItem/")
      .then(data => data.json())
      .then(json => {
        this.setState({
          products: json
        });
      })
      .catch(error => {
        // error network or json handling
      });
  }

  plusDidClick = productId => {
    this.setState({
      products: this.state.products.map(product =>
        product.id == productId
          ? {
              ...product,
              price: product.price + 10,
              like: (product.like || 0) + 1
            }
          : product
      )
    });
  };

  // addProducts = (product, index) => {
  //   this.setState({
  //     products: [
  //       ...this.state.products.splice(0, index),
  //       product,
  //       ...this.state.products.splice(index, this.state.products.length)
  //     ]
  //   });
  // };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <React.Fragment>
        <Grid
          container
          className={classes.root}
          spacing={16}
          style={{ padding: 10 }}
        >
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              justify="left"
              spacing={Number(spacing)}
            >
              {this.state.products.map(product => (
                <Grid key={product.id} item>
                  <Link
                    to="/products"
                    style={{
                      textDecoration: "none"
                    }}
                  >
                  <ProductCard
                    product={product}
                    plusDidClick={this.plusDidClick}
                    onOpenCheckoutModalClick={this.handleOpenCheckoutModalClick}
                  />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <CheckoutModal
          product={this.state.selectedProduct}
          onClose={this.handleCheckoutModalClose}
          onCheckoutClick={this.handleCheckoutClick}
        />
      </React.Fragment>
    );
  }
}

ProductGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect()(withStyles(styles)(ProductGrid));
