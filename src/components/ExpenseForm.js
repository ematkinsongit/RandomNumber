import React from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";

function ExpenseForm() {
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
      <form onSubmit={formik.handleSubmit}>
        <input
          id="min"
          name="min"
          type="number"
          placeholder="Minimum"
          value={formik.values.min}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          id="max"
          name="max"
          type="number"
          placeholder="Maximum"
          value={formik.values.max}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
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
