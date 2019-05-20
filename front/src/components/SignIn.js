import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    // backgroundColor: theme.palette.secondary.main
    backgroundColor: "#e2683c"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = (response) => {
    console.log(response);
  }

function SignIn(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Grid container alignItems="center" justify="center">
            <Grid item xs={6} style={{ padding: "10px" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="#66921b"
                className={classes.submit}
              >
                Sign in
              </Button>
            </Grid>
            <Grid item xs={6} style={{ padding: "10px" }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ padding: "10px" }}
          >
            <FacebookLogin
              appId="585481828608348" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
            />
          </Grid>
          {/* <Grid
            container
            alignItems="center"
            justify="center"
            style={{ padding: "10px" }}
          >
            <GoogleLogin
              clientId="" //CLIENTID NOT CREATED YET
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </Grid> */}
        </form>
      </Paper>
    </main>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
