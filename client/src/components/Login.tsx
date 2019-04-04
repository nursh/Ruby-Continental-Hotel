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

      <Form className="login__form">
        <h2 className="heading main-heading txt--center">Ruby Continental</h2>
        <h3 className="heading sub-heading txt--center">Hotel &amp; Suites</h3>

        <div className="field">
          <Field name="employeeNo" placeholder="Employee No" className="field__input"/>
          <ErrorMessage component="p" name="employeeNo" className="field__error" />
        </div>

        <div className="field">
          <Field type="password" name="password" placeholder="Password" className="field__input"/>
          <ErrorMessage component="p" name="password" className="field__error" />
        </div>

        <div className="field field--end">
          <NavLink to="/reset" className="field__link">Reset Password</NavLink>
        </div>

        <button type="submit" className="submit-btn">Login</button>
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
