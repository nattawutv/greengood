import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
      flexGrow: 1
    }
  });

class QuantityComponent extends React.Component{
  state = {
  };
  render() {
    const { classes } = this.props;
    // const handleAddQty = () => {
    //   this.props.plusDidClick(this.props.product.id);
    // };

    // const handleRemoveQty = () => {
    //   this.props.removeDidClick(this.props.product.id);
    // };

    return (
    //   <React.Fragment>
        <Grid container md="12px">
          <IconButton aria-label="Remove" onClick={this.props.removeDidClick}>
            <RemoveIcon />
          </IconButton>
          <Avatar aria-label="Qty">{this.props.product.qty || 0}</Avatar>
          <IconButton aria-label="Add" onClick={this.props.addDidClick}>
            <AddIcon />
          </IconButton>
        </Grid>
    //   </React.Fragment>
    );
  }
}

export default withStyles(styles)(QuantityComponent);
