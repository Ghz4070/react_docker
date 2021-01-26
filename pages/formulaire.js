import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Logo from "../components/molecules/Logo/Logo";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import ChooseAndVotingForm from "../components/templates/ChooseAndVotingForm/ChooseAndVotingForm";
import { useDispatch } from "react-redux";
import { actionResetUserTemporary } from "../store/actions/auth";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#95a5a6",
    justifyContent: "center",
  },
  fontColor: {
    textAlign: "center",
    color: "black",
    marginBottom: theme.spacing(3),
  },
}));

const Formulaire = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const nameTemporary =
    useSelector((state) => state?.auth?.nameTemporary) || "";

  const resetUser = () => {
    dispatch(actionResetUserTemporary());
    router.push("/");
  };

  if (nameTemporary === "") return router.push("/");

  return (
    <Grid className={classes.rootContainer}>
      <Logo />

      <Typography variant="h3" className={classes.fontColor}>
        Voting formations
      </Typography>

      <Typography variant="h5" className={classes.fontColor}>
        {nameTemporary}
      </Typography>

      <ChooseAndVotingForm nameUser={nameTemporary} />

      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: 20, width: "40%" }}
        onClick={() => resetUser()}
      >
        Revenir a l'accueil
      </Button>
    </Grid>
  );
};

export default Formulaire;
