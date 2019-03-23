import React from "react";
import BasketSummaryCard from "./BasketSummaryCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    addButton: {
        backgroundColor: "#FF6F00",
        color: "#FFFFFF",
        margin: "10px"
      },
      checkButton: {
        backgroundColor: "#FF0000",
        color: "#FFFFFF",
        margin: "10px"
      }
});

class BasketSummary extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={24}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <BasketSummaryCard />
        </Grid>
        <Grid container>
          <Grid item xs={6} sm={6} md={8} />
          <Grid container xs={6} sm={6} md={4}>
            <Grid item>
              <Button
                variant="contained"
                size="small"
                className={classNames(classes.button, classes.addButton)}
              >
                <div>Cancel</div>
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

export default withStyles(styles)(BasketSummary);
