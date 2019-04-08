import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ProductDetailsCard from "./ProductDetailsCard";
import FarmStoryCard from "./FarmStoryCard";

const styles = theme => ({
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120
  },
  addButton: {
    backgroundColor: "#FF6F00",
    color: "#FFFFFF",
    margin: "10px"
  },
  checkButton: {
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    margin: "10px"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  chip: {
    backgroundColor: "#ADFF2F",
    marginBottom: "10px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});
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

  render() {
    const { classes } = this.props;
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
                <ProductDetailsCard product={this.state.product} key={this.state.product.id} />
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

export default withStyles(styles)(ProductDetails);
