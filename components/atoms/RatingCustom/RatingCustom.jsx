import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "react-rating";
import { actionSetForms } from "../../../store/actions/forms";
import { useDispatch } from "react-redux";

const RatingCustom = ({ nameFormation, nameUser }) => {
  const dispatch = useDispatch();

  const handleChange = (name, rating, formation) => {
    console.log({ name, rating, formation });
    dispatch(actionSetForms({ name, rating, formation }));
  };

  return (
    <Rating
      step={1}
      stop={10}
      fractions={2}
      onChange={(value) => handleChange(nameUser, +value, nameFormation)}
    />
  );
};

export default RatingCustom;
