import React from "react";
import { Formik, useFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Input } from "@material-ui/core";

function ExpenseForm() {
  const validationSchema = Yup.object({
    min: Yup.number().required(),
    max: Yup.number().required("required!"),
    count: Yup.number()
      .min(1)
      .max(10)
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      min: 0,
      max: 100,
      count: 1,
    },
    onSubmit: (values) => {
      console.log(
        `Min: ${values.min}, Max: ${values.max}, Count: ${values.count}`
      );
      axios
        .get(
          `http://www.randomnumberapi.com/api/v1.0/random?min=${values.min}&max=${values.max}&count=${values.count}`
        )
        .then((res) => {
          const newnum = res.data;
          console.log(newnum);
        });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} validationSchema={validationSchema}>
        <Input
          id="min"
          name="min"
          type="number"
          placeholder="Minimum"
          value={formik.values.min}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          id="max"
          name="max"
          type="number"
          placeholder="Maximum"
          value={formik.values.max}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          id="count"
          name="count"
          type="number"
          placeholder="Count"
          value={formik.values.count}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default ExpenseForm;
