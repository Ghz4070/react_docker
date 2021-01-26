import React from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import { formations } from "../../../contents/data/formations/formations";
import RatingCustom from "../../../components/atoms/RatingCustom/RatingCustom";

const useStyles = makeStyles((theme) => ({
  choice: {
    textDecoration: "underline",
    cursor: "pointer",
    marginTop: 30,
    padding: 20,
    color: "white",
  },
  sloganLogin: {
    width: 300,
    marginTop: 20,
    textAlign: "center",
  },
  paper: {
    textAlign: "center",
    width: "50%",
    padding: theme.spacing(5),
  },
}));

const ChooseAndVotingForm = ({ nameUser }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {formations.map((formation, index) => {
        return (
          <Grid key={index} item xs={12}>
            <Paper elevation={3} className={classes.paper}>
              <Typography component="legend">
                Formation {formation.name} for {formation.days}
              </Typography>
              <RatingCustom
                nameUser={nameUser}
                nameFormation={formation.name}
              />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ChooseAndVotingForm;
