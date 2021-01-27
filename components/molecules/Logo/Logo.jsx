import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDocker, faReact } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faDocker, faReact);
import styled from "styled-components";
import { rotate } from "../../../styles/keyframes";

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 15s infinite linear;
`;

const useStyles = makeStyles((theme) => ({
  displayLogo: {
    justifyContent: "center",
    marginTop: "10%",
  },

  iconDocker: {
    textAlign: "center",
    color: "#3498db",
    fontSize: 100,
    marginRight: 25,
  },
  iconReact: {
    textAlign: "center",
    color: "#9b59b6",
    fontSize: 100,
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.displayLogo}>
      <FontAwesomeIcon
        icon={["fab", "docker"]}
        className={classes.iconDocker}
      />
      <Rotate>
        <FontAwesomeIcon
          icon={["fab", "react"]}
          className={classes.iconReact}
        />
      </Rotate>
    </Grid>
  );
};

export default Logo;
