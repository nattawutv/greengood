import React from "react";
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({});
class ProductDetails extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24} style={{
                  paddingRight: 10,
                  paddingLeft: 10
                }}>
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
                Home >
              </h4>
            </Link>
          </Grid>
          <Grid item xs={8} md={8}>
            <Paper>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={4} md={4}>
            <Paper>xs=12 sm=6</Paper>
          </Grid>
        </Grid>

        {/* { <Link to="/">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            Organic Vegetables >
          </Typography>
        </Link>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            Products
          </Typography> } */}
      </div>
    );
  }
}

export default ProductDetails;
