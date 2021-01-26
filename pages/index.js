import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import Logo from "../components/molecules/Logo/Logo";
import Link from "next/link";
import NameForm from "../components/templates/NameForm/NameForm";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#95a5a6",
    justifyContent: "center",
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

const Home = () => {
  const classes = useStyles();

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
      </Grid>
    </>
  );
};

export default Home;
