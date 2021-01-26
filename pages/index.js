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
    justifyContent: "center",
  },
  displayLogo: {
    justifyContent: "center",
    marginTop: "10%",
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
        <Grid container className={classes.displayLogo}>
          <FontAwesomeIcon
            icon={["fab", "docker"]}
            className={classes.iconDocker}
          />
          <FontAwesomeIcon
            icon={["fab", "react"]}
            className={classes.iconDocker}
          />
        </Grid>

        <Typography variant="h2" className={classes.fontColor}>
          Bienvenu sur App for Voting
        </Typography>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <Paper elevation={3} className={classes.paper}>
            <Grid>
              <TextField
                className={classes.textField}
                label="Votre nom ?"
                variant="outlined"
              />
            </Grid>
            <Grid>
              <Button variant="outlined" color="primary">
                Primary
              </Button>
            </Grid>
          </Paper>
        </Grid>

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
