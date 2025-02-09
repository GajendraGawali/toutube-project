import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: " ",
  password: " ",
  confirm_password: " ",
};

const Header = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      
        <form action=" " onSubmit={handleSubmit}>
          <label htmlFor="name"> Enter your name</label> <br />
          <input
            type="text"
            placeholder="Enter Name "
            id="name"
            className="form-control"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          /> <br />
          <label htmlFor="email"> Enter your email</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          /> <br />
          <label htmlFor="password">Enter your password</label> <br />
          <input 
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder=" passsword"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          /> <br />
          <label htmlFor="confirm_password">Confirm your password</label> <br />
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className="form-control"
            placeholder="confirm your password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br />
          <button type="submit" className="btn">
            sign up
          </button>
        </form>
      
    </div>
  );
};

export default Header;
