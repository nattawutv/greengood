import React from "react";
import BasketSummaryCard from "./BasketSummaryCard";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import avatar from "../image/profile1.png";
import { Chip, Paper, Avatar, Typography } from "@material-ui/core";

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
  },
  Label: {
    color: "#66921b",
    margin: "10px"
  },
  chip: {
    margin: theme.spacing.unit,
    backgroundColor: "#f9ab00"
  },
  footer: {
    position: "sticky",
    bottom: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    margin:"10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  total:{
    color: "#f9ab00",
    fontSize: "20pt",
    fontWeight: "bold",
    paddingLeft: "50px"
  }
});

class BasketSummary extends React.Component {
  state = {
    orders: [],
    total: 0,
  };
  componentDidMount() {
    fetch("http://localhost:8080/BasketSummary")
      .then(data => data.json())
      .then(json => {
        this.setState({
          orders: json
        });
      })
      .catch(error => {
        // error network or json handling
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid
        container
        spacing={12}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          paddingTop: 80
        }}
      >
        {this.state.orders.map(order => (
          <Grid xs={12} sm={12} md={12}>
            <Paper style={{ margin: 10 }}>
              <Grid container style={{ marginLeft: 10, paddingTop: 20 }}>
                <Grid
                  container
                  xs={12}
                  sm={6}
                  md={2}
                  alignItems="left"
                  justify="center"
                >
                  <Avatar src={avatar} tyle={{ margin: 0 }} />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classNames(classes.Label)}
                  >
                    {order.storeName}
                  </Typography>
                </Grid>
                <Grid container xs={12} sm={3} md={3}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classNames(classes.Label)}
                  >
                    {"หมายเลขคำสั่งซื้อ :"} {order.no}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={7}
                  md={7}
                  alignItems="right"
                  justify="center"
                >
                  <Chip label={order.status} className={classes.chip} />
                </Grid>
              </Grid>
              <BasketSummaryCard
                products={order.products}
                subtotal={order.subtotal}
                deliveryFee={order.deliveryFee}
                total={order.total}
              />
            </Paper>
          </Grid>
        ))}
        
        <Grid container xs={12} sm={12} md={12} className={classNames(classes.footer)}>
        <Grid item xs={0} sm={0} md={6}/>
          <Grid item xs={12} sm={4} md={2} className={classNames(classes.total)}>
            {"Total ฿"} {this.state.total}
          </Grid>
          <Grid container xs={12} sm={6} md={4}>
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
      </div>
    );
  }
}

export default withStyles(styles)(BasketSummary);
