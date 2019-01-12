import React, { Component } from 'react';
import './style/NavBar.css';
import NavBar from './components/NavBar'
import ProductGrid from './components/ProductGrid'
import ImageGridList from './components/ImageGridList'
import Typography from '@material-ui/core/Typography'
import ProductCategoryAccordian from './components/ProductCategoryAccordian'
import Grid from '@material-ui/core/Grid';


class App extends Component {
  render() {
    return (
      <div id="navbar" >
        <NavBar />
        <ImageGridList />
        <Grid container spacing={12}>
          <Grid item xs={2}>
              <ProductCategoryAccordian />
          </Grid>
          <Grid item xs={10}>
              <Typography component="h2" variant="display2" gutterBottom style={{ paddingTop: 20, paddingLeft: 20 }}>
                Most Popular
              </Typography>
              <ProductGrid />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
