import React from "react";
import { TextField, makeStyles, FormHelperText, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  textError: {
    color: "#f44336",
  },
  width: {
    width: "100%",
  },
  toto: {
    paddingTop: 30,
  },
});

const TextFieldFormik = ({ className, form, field, ...props }) => {
  const classes = useStyles();
  const textInputRef = React.useRef(null);
  const { errors, touched, setFieldValue, setFieldTouched } = form;
  const { name } = field;

  return (
    <Grid container spacing={1} alignContent="center" alignItems="center">
      <Grid item className={classes.width}>
        <TextField
          ref={textInputRef}
          name={name}
          error={touched?.[name] && errors?.[name]}
          className={className}
          onBlur={() => {
            setFieldTouched(name, true);
          }}
          onChange={(e) => {
            setFieldValue(name, e.target.value);
          }}
          {...props}
        />
        {touched?.[name] && errors?.[name] && (
          <FormHelperText className={classes.textError}>
            {errors?.[name]}
          </FormHelperText>
        )}
      </Grid>
    </Grid>
  );
};

export default TextFieldFormik;
