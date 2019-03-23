import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import img4 from "../image/tomatoes.jpg";
import img_farm from "../image/farm_sample.jpg";
import StarIcon from "@material-ui/icons/Star";
import ShoppingIcon from "@material-ui/icons/ShoppingBasket";
import StarRatingComponent from "react-star-rating-component";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";

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
    width: 200,
  }
});
class ProductDetails extends React.Component {
  state = {
    rating: 3.5,
    open: false,
    quantity: 1,
    unit: 1
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

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
            <Grid container item xs={8} md={8} spacing={24}>
              <Grid item xs={6} sm={6} md={6}>
                <img style={{ width: "100%" }} src={img4} alt="Tomatoes" />
              </Grid>
              <Grid container item xs={6} sm={6} md={6}>
                <Grid item>
                  <h2>Tomatoes</h2>
                  <Chip label="Organics" clickable className={classes.chip} />
                  <div>
                    <StarRatingComponent
                      editing={false}
                      starCount={5}
                      value={3.5}
                      renderStarIcon={() => <StarIcon />}
                    />
                  </div>

                  <Divider variant="middle" />
                  <h4>Short description</h4>
                  <h4 style={{ color: "#8E8E8E" }}>
                    Long Description -- Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </h4>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <h1 style={{ color: "#FF8900" }}>25 Baht </h1>
                </Grid>
                
                <Grid item xs={6} sm={6} md={6}>
                  <TextField
                    label="Quantity"
                    value={this.state.quantity}
                    // onChange={this.handleChange("age")}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                  <form autoComplete="off">
                    <FormControl className={classes.formControl}  margin="normal">
                      <InputLabel htmlFor="unit-select">Unit</InputLabel>
                      <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.unit}
                        onChange={this.handleChange}
                        inputProps={{
                          name: "unit",
                          id: "unit-select"
                        }}
                      >
                        <MenuItem value={1}>Kilograms</MenuItem>
                        <MenuItem value={2}>Bags (5 kgs)</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </Grid>
                <Grid container item>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="small"
                      className={classNames(classes.button, classes.addButton)}
                    >
                      <ShoppingIcon
                        className={classNames(
                          classes.leftIcon,
                          classes.iconSmall
                        )}
                      />
                      <div>Add To Basket</div>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="small"
                      className={classNames(
                        classes.button,
                        classes.checkButton
                      )}
                    >
                      <div>Checkout</div>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 300 }}
                    image={img_farm}
                    title="Farm Story"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Farm Story
                    </Typography>
                    <Typography component="p">
                      Our soil has been farmed for over one hundred and fifty
                      years. Many farmers who came before us cared for this soil
                      and this land. We consider organic farming to be the
                      fountain of youth of soil. Nutrient rich soil produces
                      nutrient rich food. In a country of perceived abundance,
                      people are eating more and more unhealthy food, and our
                      bodies are not getting the vitamins and minerals they
                      need. Healthy soil produces healthy crops and healthy
                      crops produce healthy people. Farming organically and
                      promoting good dietary choices is a privilege. Our land
                      has previously been planted in fruit trees, most recently
                      walnut trees, which were removed in 2006. The soil is a
                      sycamore silty clay loam, with an excellent texture for
                      growing all kinds of vegetables.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProductDetails);
