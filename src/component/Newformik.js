import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

function Newformik() {
  const initialValues = {
    name: "",
    password: "",
    email: "",
    phonenum: "",
  };

  const onSubmit = (value, submitprops) => {
    alert(`Thankyou ${value.name} your form is submitted `);

    submitprops.resetForm();
  };

  const validate = (value) => {
    let errors = {};
    if (!value.name) {
      errors.name = "*required name";
    }
    if (!value.password) {
      errors.password = "*required password";
    }

    if (!value.email) {
      errors.email = "*required email";
    }

    if (!value.phonenum) {
      errors.phonenum = "*required number";
    }

    return errors;
  };

  return (
    <Formik
      classname="formik"
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <Form>
        <h1 classname=" animate__animated animate__bounce animate__faster">
          Rikon Company Form
        </h1>

        <div>
          <label htmlFor="name">
            <span>Name</span>
          </label>
          <br></br>
          <Field
            type="name"
            name="name"
            autocomplete="off"
            placeholder="enter name"
          ></Field>
          <span>
            <ErrorMessage name="name" component="h5"></ErrorMessage>
          </span>
        </div>
        <div>
          <label htmlFor="password">
            <span>password</span>
          </label>
          <br></br>

          <Field
            type="password"
            name="password"
            autocomplete="off"
            placeholder="enter password"
          ></Field>
          <ErrorMessage name="password" component="h5" />
        </div>
        <div>
          <label>
            <span>email</span>
          </label>
          <br></br>
          <Field
            type="email"
            name="email"
            autocomplete="off"
            placeholder="enter email"
          ></Field>

          <ErrorMessage name="email" component="h5" />
        </div>
        <div>
          <label>
            <span>Phonenum</span>
          </label>
          <br></br>
          <Field
            type="number"
            name="phonenum"
            autocomplete="off "
            placeholder="enter  number"
          ></Field>

          <ErrorMessage name="phonenum" component="h5" />
        </div>
        <br></br>
        <button className=" submit" type="submit">
          submit
        </button>
      </Form>
    </Formik>
  );
}

export default Newformik;
