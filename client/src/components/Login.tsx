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
    <div>
      <h2>Ruby Continental</h2>
      <h3>Hotel &amp; Suites</h3>
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
