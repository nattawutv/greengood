import React from "react";
import { Typography, Modal, withStyles, Button } from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

const isOpen = product => product !== undefined;

const CheckoutModal = props =>
  isOpen(props.product) ? (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isOpen(props.product)}
      onClose={props.onClose}
    >
      <div className={props.classes.paper}>
        <Typography variant="h6" id="modal-title">
          {props.product.title}
        </Typography>
        <Typography variant="subtitle1" id="simple-modal-description">
          {props.product.like}
        </Typography>
        <Button onClick={props.onCheckoutClick}>Okay</Button>
      </div>
    </Modal>
  ) : null;

export default withStyles(styles)(CheckoutModal);
