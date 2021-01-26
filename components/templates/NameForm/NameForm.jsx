import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";
import { Button, makeStyles, Grid, Paper } from "@material-ui/core";
import TextFieldFormik from "../../atoms/TextFieldFormik/TextFieldFormik";
import {
  actionSetUserTemporary,
  actionResetUserTemporary,
} from "../../../store/actions/auth";

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: "center",
  },
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

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Trop court!")
    .max(50, "Trop long!")
    .required("Veuillez renseigner un nom"),
});

const NameForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Grid container justify="center">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          if (values.name !== "") {
            dispatch(actionResetUserTemporary());
            dispatch(actionSetUserTemporary(values.name));
            router.push("/formulaire");
          }
        }}
      >
        <Paper elevation={3} className={classes.paper}>
          <Form method="POST" className={classes.form}>
            <Field
              component={TextFieldFormik}
              name="name"
              label="Nom Prenom"
              variant="outlined"
              fullWidth
            />

            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ marginTop: 20, width: "100px" }}
            >
              Valider
            </Button>
          </Form>
        </Paper>
      </Formik>
    </Grid>
  );
};

export default NameForm;
