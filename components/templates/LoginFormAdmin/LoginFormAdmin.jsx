import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";
import { Button, makeStyles, Grid, Paper } from "@material-ui/core";
import TextFieldFormik from "../../atoms/TextFieldFormik/TextFieldFormik";
import { actionSetUser } from "../../../store/actions/auth";
import { adminUser } from "../../../contents/admin/admin";

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
  identifier: yup
    .string()
    .email("Le format de votre email est n'est pas valide")
    .required("Veuillez renseigner un identifiant"),
  password: yup
    .string()
    .min(6, "Votre mot de passe doit contenir un minimum de 6 caractères")
    .required("Veuillez renseigner un mot de passe"),
});

const LoginFormAdmin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Grid container justify="center">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          identifier: "",
          password: "",
        }}
        onSubmit={(values) => {
          if (
            adminUser.email === values.identifier &&
            adminUser.password === values.password
          ) {
            dispatch(actionSetUser({ name: values.identifier, role: "ADMIN" }));
            router.push("/security/admin/dashboard");
          } else {
            alert("vos identifiants sont incorrects");
          }
        }}
      >
        <Paper elevation={3} className={classes.paper}>
          <Form method="POST" className={classes.form}>
            <Field
              component={TextFieldFormik}
              name="identifier"
              label="Email"
              variant="outlined"
              fullWidth
            />
            <Field
              component={TextFieldFormik}
              name="password"
              type="password"
              label="Mot de passe"
              variant="outlined"
              fullWidth
              style={{ marginTop: 20 }}
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

export default LoginFormAdmin;
