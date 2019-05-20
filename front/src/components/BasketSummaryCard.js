import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

class BasketSummaryCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.products.map(product => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell align="right">{product.qty}</TableCell>
                <TableCell align="right">{product.unit}</TableCell>
                <TableCell align="right">{ccyFormat(product.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(this.props.subtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Delivery Fee</TableCell>
              <TableCell align="right">{ccyFormat(this.props.deliveryFee)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(this.props.total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

BasketSummaryCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BasketSummaryCard);
