import React from 'react';
import { withFormik, FormikProps } from 'formik';

interface LoginFormProps {
  employeeNo: string,
  password: string
};

const LoginForm = (props: FormikProps<LoginFormProps>) => {
  return (
    <div>
      Login Page
    </div>
  )
}

export const Login = withFormik({
  mapPropsToValues: () => ({
    employeeNo: '',
    password: ''
  }),
  handleSubmit: () => {

  }
})(LoginForm);
