import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingIcon from "@material-ui/icons/ShoppingBasket";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StarRatingComponent from "react-star-rating-component";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  card: {
    width: 380,
    height: 460
  },
  media: {
    width: "100%",
    // height: 0,
    paddingTop: "56.25%" // 16:9
  },
  addButton: {
    backgroundColor: "#FF6F00",
    color: "#FFFFFF",
    width: "100%"
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 20,
    margin: 5,
    position: 'relative'
  },
  body: {
    alignSelf: "end",
    height: 80,
    flex: 1
  },
  priceText: {
    fontWeight: 'bold',
    color: "#FF8900" ,
    fontSize: 22
  }
});

class ProductCard extends React.Component {
  state = { isExpanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ isExpanded: !state.isExpanded }));
  };

  render() {
    const { classes } = this.props;
    const handleAddQty = () => {
      this.props.plusDidClick(this.props.product.id);
    };

    const handleRemoveQty = () => {
      this.props.removeDidClick(this.props.product.id);
    };

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.product.itm_name}
          subheader={this.props.product.store_name}
        />
        <Link
          to={'product/'+ this.props.product.id} 
          style={{
            textDecoration: "none"
          }}
          
        >
          <CardMedia
            className={classes.media}
            image="http://staffingstream.wpengine.netdna-cdn.com/wp-content/uploads/2012/12/carrots.jpg"
            title="Paella dish"
          />
        </Link>
        <div className={classes.body}>
          <CardContent>
            <TextTruncate
              line={2}
              truncateText="…"
              text={this.props.product.short_desc}
            />
            <Grid container style={{
                    paddingTop: 10,
                    margin: 5
                  }}>
              <Grid item xs="6" md="6">
                <StarRatingComponent
                  editing={false}
                  starCount={5}
                  value={this.props.product.rating}
                  renderStarIcon={() => <StarIcon />}
                />
              </Grid>
              <Grid item xs='6' md='6'>
              <div className={classes.priceText}>
                {/* {this.props.product.price} */}
                ${this.props.product.delivery_fee}</div>
              </Grid>
            </Grid>
          </CardContent>
        </div>
        <CardActions className={classes.actions}>
          <Grid container md="12px">
            <IconButton aria-label="Remove" onClick={handleRemoveQty}>
              <RemoveIcon />
            </IconButton>
            <Avatar aria-label="Qty">{this.props.product.qty || 0}</Avatar>
            <IconButton aria-label="Add" onClick={handleAddQty}>
              <AddIcon />
            </IconButton>
          </Grid>
          {/* <IconButton
            aria-label="Add to Basket"
            onClick={() =>
              this.props.onOpenCheckoutModalClick(this.props.product.id)
            }
          >
            <ShoppingBasket />
          </IconButton> */}
          <Grid container md="12px" alignItems="center">
            <Grid item alignContent="center" paddingLeft={4}>
              <Button
                variant="contained"
                size="small"
                className={classNames(classes.addButton)}
                onClick={() =>
                  this.props.onOpenCheckoutModalClick(this.props.product.id)
                }
              >
                <ShoppingIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                <div>Add To Basket</div>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
