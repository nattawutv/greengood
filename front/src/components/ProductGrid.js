import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import ProductCard from './ProductCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ProductGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16} style={{ padding: 10 }}>
        <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="left" spacing={Number(spacing)}>
            {[0, 1, 2, 3, 4].map(value => (
              <Grid key={value} item>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

    );
  }
}

ProductGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductGrid);
