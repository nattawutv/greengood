import React, { Component } from "react";
import "./style/NavBar.css";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ImageGridList from "./components/ImageGridList";
import Typography from "@material-ui/core/Typography";
import ProductCategoryAccordian from "./components/ProductCategoryAccordian";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListContext from "./ProductListContext";
import ProductDetails from "./components/ProductDetails";

class App extends Component {
  state = { checkedoutProducts: [] };

  handleCheckoutClick = product => {
    this.setState({
      checkedoutProducts: [...this.state.checkedoutProducts, product]
    });
  };

  render() {
    return (
      <Router>
        <div id="navbar">
          <ProductListContext.Provider value={this.state.checkedoutProducts}>
            <NavBar />
          </ProductListContext.Provider>
          {/* <Route path="/" component={() => } /> */}
          <Switch>
            <Route
              path="/products"
              component={() => (
                <>
                 <ProductDetails></ProductDetails>
                </>
              )}
            />
            <Route
              path="/"
              component={() => (
                <>
                  <ImageGridList />
                  <Grid container spacing={12}>
                    <Grid item xs={2}>
                      <ProductCategoryAccordian />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        component="h2"
                        variant="display2"
                        gutterBottom
                        style={{ paddingTop: 20, paddingLeft: 20 }}
                      >
                        Most Popular
                      </Typography>
                      <ProductGrid onCheckoutClick={this.handleCheckoutClick} />
                    </Grid>
                  </Grid>
                </>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
