import React from 'react';
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

interface LoginFormProps {
  employeeNo: string,
  password: string
};

const LoginForm = (props: FormikProps<LoginFormProps>) => {
  return (
    <div className="login">
      <h2 className="heading main-heading">Ruby Continental</h2>
      <h3 className="heading sub-heading">Hotel &amp; Suites</h3>
      <Form>
        <div>
          <Field name="employeeNo" placeholder="Employee No" />
          <ErrorMessage name="employeeNo" />
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />
        </div>

        <div>
          <NavLink to="/reset">Reset Password</NavLink>
        </div>

        <button type="submit">Login</button>
      </Form>
    </div>
  )
}

export const Login = withFormik({
  mapPropsToValues: () => ({
    employeeNo: '',
    password: ''
  }),
  validationSchema: yup.object().shape({
    employeeNo: yup.string().required('Employee No. is required'),
    password: yup.string().required('Password is required')
  }),
  handleSubmit: ({ employeeNo, password}) => {
    console.log(`Employee No is ${employeeNo}`, `Password is ${password}`);
  }
})(LoginForm);
