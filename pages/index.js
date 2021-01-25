import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDocker, faReact } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faDocker, faReact);
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#95a5a6",
  },
  displayLogo: {
    marginTop: "10%",
  },
  textField: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  fontColor: {
    textAlign: "center",
    color: "black",
    marginBottom: theme.spacing(3),
    fontSize: 20,
  },
  fontColorAdmin: {
    textDecoration: "underline",
    cursor: "pointer",
    textAlign: "center",
    color: "black",
    margin: 40,
    fontSize: 20,
  },
  iconDocker: {
    textAlign: "center",
    color: "#3498db",
    fontSize: 100,
    marginRight: 25,
  },
  paper: {
    width: "50%",
    padding: theme.spacing(5),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.rootContainer}>
        <Grid container justify="center" className={classes.displayLogo}>
          <FontAwesomeIcon
            icon={["fab", "docker"]}
            className={classes.iconDocker}
          />
          <FontAwesomeIcon
            icon={["fab", "react"]}
            className={classes.iconDocker}
          />
        </Grid>
        <Grid container justify="center">
          <Typography variant="p" className={classes.fontColor}>
            Bienvenu sur App for Voting
          </Typography>
          <Grid container justify="center">
            <Paper elevation={3} justify="center" className={classes.paper}>
              <TextField
                className={classes.textField}
                label="Votre nom ?"
                variant="outlined"
              />
              <Button
                variant="outlined"
                color="primary"
                className={classes.textField}
              >
                Primary
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="center">
          <Link href="/security/admin/login" as="/admin">
            <Typography variant="p" className={classes.fontColorAdmin}>
              Vous etes admin ?
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
