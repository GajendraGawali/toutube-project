import React from "react";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
      confirm_password :Yup.string()
      .required()
      .oneOf([Yup.ref("password"),null],"Password must be match"),

  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-6 bg-gray-100 shadow-lg rounded-md ">
          <h2 className="text-2xl font-bold mb-4 ">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="name" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password:</label>
            <Field
            type="password"
            name="confirm_password"
            className ="w-full p-2 border-rounded"
            
            />
            <ErrorMessage name="confirm_password" component="div" className="text-red-500"/>

          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
