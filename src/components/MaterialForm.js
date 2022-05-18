import React from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import axios from "axios";

const validationschema = yup.object({
  min: yup
    .number("Enter your minimum value")
    .min("Enter a number that is lower than the maximum")
    .required("A minimum value is required")
    .integer(),
  max: yup
    .number("Enter your maximum value")
    .max("Enter a number that is higher than the minimum")
    .required("A maximum value is required")
    .integer(),
  count: yup
    .number("Enter a count value")
    .min(1, "Enter a positive integer")
    .required("Count is required")
    .positive()
    .integer(),
});

function MaterialForm() {
  const formik = useFormik({
    initialValues: {
      min: 0,
      max: 100,
      count: 1,
    },
    validationschema: validationschema,
    onSubmit: (values) => {
      console.log(
        `Min: ${values.min}, Max: ${values.max}, Count: ${values.count}`
      );
      // axios
      //   .get(
      //     `http://www.randomnumberapi.com/api/v1.0/random?min=${values.min}&max=${values.max}&count=${values.count}`
      //   )
      //   .then((result) => {
      //     const newnum = result.data;
      //     console.log(newnum);
      //   });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} validationschema={validationschema}>
        <TextField
          id="min"
          value={formik.values.min}
          onChange={formik.handleChange}
          variant="outlined"
          type="number"
        />
        <br />
        <TextField
          id="max"
          value={formik.values.max}
          onChange={formik.handleChange}
          variant="outlined"
          type="number"
        />
        <br />
        <TextField
          id="count"
          value={formik.values.count}
          onChange={formik.handleChange}
          variant="outlined"
          type="number"
        />
        <br />
        <Button type="submit">Submit</Button>{" "}
      </form>
    </div>
  );
}

export default MaterialForm;
