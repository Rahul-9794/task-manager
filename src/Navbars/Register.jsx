import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import "../styles/form.css";

const Register = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      conformpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      conformpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      alert(
        `Email: ${values.email}\nPassword: ${values.password}\nConfirm Password: ${values.conformpassword}`
      );
    },
  });

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="conformpassword">Confirm Password</label>
        <input
          id="conformpassword"
          name="conformpassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.conformpassword}
        />
        {formik.touched.conformpassword && formik.errors.conformpassword ? (
          <div className="error">{formik.errors.conformpassword}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
