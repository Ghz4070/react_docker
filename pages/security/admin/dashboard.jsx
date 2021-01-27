import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import Logo from "../../../components/molecules/Logo/Logo";
import Table from "../../../components/molecules/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { actionResetUser } from "../../../store/actions/auth";
import { useRouter } from "next/router";
import { CSVLink } from "react-csv";

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
  csv: { textDecoration: "underline" },
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const adminUser = useSelector((state) => state?.auth?.profile);
  const data = useSelector((state) => state?.forms?.forms);

  const headers = [
    { label: "Identifiant", key: "name" },
    { label: "Formation", key: "formation" },
    { label: "Note", key: "rating" },
  ];

  const logOut = () => {
    dispatch(actionResetUser());
  };

  console.log(data);

  if (adminUser.role !== "ADMIN") router.push("/");

  return (
    <>
      <Grid className={classes.rootContainer}>
        <Logo />

        <Typography variant="h2" className={classes.fontColor}>
          Dashboard
        </Typography>

        <Grid container justify="center">
          <Table />

          <Button
            variant="outlined"
            color="primary"
            style={{ margin: 10, width: "35%" }}
            onClick={() => logOut()}
          >
            Deconnexion
          </Button>

          <Button
            variant="outlined"
            color="primary"
            style={{ margin: 10, width: "35%" }}
          >
            <CSVLink
              data={data}
              headers={headers}
              filename="Export_Data.csv"
              className={classes.csv}
            >
              Export in CSV
            </CSVLink>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
