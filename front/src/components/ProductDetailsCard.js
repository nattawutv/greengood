import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import img4 from "../image/tomatoes.jpg";
import StarIcon from "@material-ui/icons/Star";
import ShoppingIcon from "@material-ui/icons/ShoppingBasket";
import StarRatingComponent from "react-star-rating-component";
import Divider from "@material-ui/core/Divider";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddIcon from "@material-ui/icons/AddBox";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  addButton: {
    backgroundColor: "#e77818",
    color: "#FFFFFF",
    margin: "10px"
  },
  checkButton: {
    backgroundColor: "#f93411",
    color: "#FFFFFF",
    margin: "10px"
  },
  iconSmall: {
    fontSize: 20,
    marginRight: theme.spacing.unit
  },
  iconLarge: {
    fontSize: 36
  },
  chip: {
    backgroundColor: "#cad877",
    marginBottom: "10px"
  },
  unitchip: {
    borderColor: "#cad877",
    margin: "5px"
  },
  root: {
    padding: 10
  },
  alignmiddle: {
    display: "flex",
    justifyContent: "middle",
    alignItems: "center"
  }
});

class ProductDetailsCard extends React.Component {
  state = {
    units: [
      { id: 1, name: "kilograms" },
      { id: 2, name: "pack" },
      { id: 3, name: "dozen" },
      { id: 4, name: "bag" }
    ]
  };
  render() {
    const { classes } = this.props;
    const handleAddQty = () => {
      this.props.addDidClick(this.props.product.id);
    };

    const handleRemoveQty = () => {
      this.props.removeDidClick(this.props.product.id);
    };
    const handleSelectUnit = unitId => () => {
      this.props.selectUnit(unitId);
    };
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={6} md={6} className={classes.root}>
          <img style={{ width: "100%" }} src={img4} alt="Tomatoes" />
        </Grid>
        <Grid container item xs={12} sm={6} md={6} className={classes.root}>
          <Grid item>
            <h2>{this.props.product.item}</h2>
            <Chip label="Organics" clickable className={classes.chip} />
            <div>
              <StarRatingComponent
                editing={false}
                starCount={5}
                // value={this.props.product.rating}
                value={3.5}
                renderStarIcon={() => <StarIcon />}
              />
            </div>

            <Divider variant="middle" />
            {/* <h4>{this.props.product.short_desc}</h4> */}
            <h4>short_desc</h4>
            <h4 style={{ color: "#8E8E8E" }}>
              Long Description -- Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </h4>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            className={classes.alignmiddle}
          >
            <h2 style={{ color: "#FF8900", margin: "10px" }}>25 Baht </h2>
          </Grid>

          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            className={classes.alignmiddle}
          >
            <Grid item xs={2} sm={2} md={2}>
              <div style={{ color: "#b6b8b8" }}>{"Quantity"}</div>
            </Grid>
            <IconButton aria-label="Remove" onClick={handleRemoveQty}>
              <RemoveIcon />
            </IconButton>
            <div>{this.props.product.qty || 0}</div>
            <IconButton aria-label="Add" onClick={handleAddQty}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            xa={12}
            sm={12}
            md={12}
            className={classes.alignmiddle}
          >
            <Grid item xs={2} sm={2} md={2}>
              <div style={{ color: "#b6b8b8" }}>{"Unit"}</div>
            </Grid>
            {this.state.units.map(unit => (
              <Chip
                label={unit.name}
                className={classes.unitchip}
                onClick={handleSelectUnit(unit)}
                component="a"
                clickable
                variant="outlined"
              />
            ))}
          </Grid>
          {/* <Grid item xs={6} sm={6} md={6} className={classes.alignmiddle}>
            <InputLabel htmlFor="unit-select">Unit</InputLabel>
            <Form>
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
            </Form>
          </Grid> */}
          <Grid xs={12} sm={12} md={12}
          style={{
            color: "#feaa51",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px"
          }}>
            {"You've selected"} {this.props.product.qty || "NOTHING!"} &nbsp;
            {this.props.product.unit ? this.props.product.unit.name : "-"}
          </Grid>
          <Grid container item>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                className={classNames(classes.button, classes.addButton)}
              >
                <ShoppingIcon className={classNames(classes.iconSmall)} />
                <div>Buy Now</div>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                className={classNames(classes.button, classes.checkButton)}
              >
                <div>Checkout</div>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProductDetailsCard);
