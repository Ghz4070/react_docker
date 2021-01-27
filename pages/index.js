import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Logo from "../components/molecules/Logo/Logo";
import Link from "next/link";
import NameForm from "../components/templates/NameForm/NameForm";
import { useDispatch } from "react-redux";
import {
  actionResetUser,
  actionResetUserTemporary,
} from "../store/actions/auth";
import { actionSetForms, actionResetForms } from "../store/actions/forms";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#95a5a6",
    justifyContent: "center",
    overflow: "scroll",
  },
  textField: {
    marginBottom: theme.spacing(3),
  },
  fontColor: {
    textAlign: "center",
    color: "black",
    marginBottom: theme.spacing(3),
  },
  fontColorAdmin: {
    textDecoration: "underline",
    cursor: "pointer",
    textAlign: "center",
    color: "black",
    margin: 40,
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const restAll = () => {
    dispatch(actionResetUser());
    dispatch(actionResetUserTemporary());
    dispatch(actionResetForms());
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid className={classes.rootContainer}>
        <Logo />

        <Typography variant="h2" className={classes.fontColor}>
          Bienvenu sur App for Voting
        </Typography>

        <NameForm />

        <Grid container justify="center">
          <Link href="/security/admin/login" as="/admin">
            <Typography variant="h5" className={classes.fontColorAdmin}>
              Vous etes admin ?
            </Typography>
          </Link>
        </Grid>
        <Grid container justify="center">
          <Button
            variant="outlined"
            color="primary"
            style={{ marginBottom: 50, marginTop: 20, width: "40%" }}
            onClick={() => restAll()}
          >
            Vider le cache
          </Button>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </Grid>
    </>
  );
};

export default Home;
