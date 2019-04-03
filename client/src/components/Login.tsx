import React from 'react';
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';

interface LoginFormProps {
  employeeNo: string,
  password: string
};

const LoginForm = (props: FormikProps<LoginFormProps>) => {
  return (
    <div>
      <Form>
        <div>
          <Field name="employeeNo" placeholder="Employee No" />
          <ErrorMessage name="employeeNo" />
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" />
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
  handleSubmit: ({ employeeNo, password}) => {
    console.log(`Employee No is ${employeeNo}`, `Password is ${password}`);
  }
})(LoginForm);
