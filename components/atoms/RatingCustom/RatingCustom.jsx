import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import { actionSetForms } from "../../../store/actions/forms";
import { useDispatch } from "react-redux";

const RatingCustom = ({ nameFormation, nameUser }) => {
  const dispatch = useDispatch();

  const handleChange = (name, rating, formation) => {
    dispatch(actionSetForms({ name, formation, rating }));
  };

  return (
    <Rating
      name="rating"
      size="large"
      max={10}
      precision={0.5}
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
      onChange={(event) =>
        handleChange(nameUser, nameFormation, +event.target.defaultValue)
      }
    />
  );
};

export default RatingCustom;
