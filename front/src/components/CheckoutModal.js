import React from "react";
import {
  withStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
  Chip
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },

  unitchip: {
    borderColor: "#cad877",
    margin: "5px"
  },
});

const isOpen = product => product !== undefined;
const CheckoutModal = props =>
  isOpen(props.product) ? (
    // <Modal
    //   aria-labelledby="simple-modal-title"
    //   aria-describedby="simple-modal-description"
    //   open={isOpen(props.product)}
    //   onClose={props.onClose}
    // >
    //   <div className={props.classes.paper}>
    //     <Typography variant="h6" id="modal-title">
    //       {props.product.itm_name}
    //     </Typography>
    //     <Typography variant="subtitle1" id="simple-modal-description">
    //       {props.product.like}
    //     </Typography>
    //     <Button onClick={props.onCheckoutClick}>Okay</Button>
    //   </div>
    // </Modal>
    <Dialog maxWidth="xs" open={isOpen(props.product)} onClose={props.onClose}>
      <DialogTitle id="checkout-modal">
        <div style={{ color: "#feaa51", fontSize: "18px" }}>
          Add to Your Basket Confirmation
        </div>
      </DialogTitle>
      <DialogContent>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <h4>{props.product.itm_name}</h4>
          </Grid>
          <Grid item xs={4} style={{ color: "#b6b8b8" }}>
            {"Quantity"}
          </Grid>
          <Grid item xs={8}>
            {props.product.qty}
          </Grid>
          <Grid item xs={4} style={{ color: "#b6b8b8", paddingTop:"10px" }} >
            {"Unit"}
          </Grid>
          <Grid item xs={8} style={{paddingTop:"10px"}}>
            {props.product.units.map(unit => (
              <Chip
                label={unit.name}
                className={props.classes.unitchip}
                component="a"
                clickable
                variant="outlined"
              />
            ))}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.onCheckoutClick} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;

export default withStyles(styles)(CheckoutModal);
