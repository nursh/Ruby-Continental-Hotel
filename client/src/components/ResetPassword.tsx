import React from 'react'
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import * as yup from 'yup';


interface RouteParams {

}

interface ResetProps extends RouteComponentProps<RouteParams> {

}

interface ResetFormProps {
  password: string
}

const ResetPasswordForm = (props: ResetProps & FormikProps<ResetFormProps>) => {
  return (
    <div className="f-container">
      <Form className="f-container__form">
        <h2 className="heading main-heading txt-center">Enter New Password</h2>

        <div className="field field--last">
          <Field type="password" name="password" placeholder="Password" className="field__input"/>
          <ErrorMessage component="p" name="password" className="field__error" />
        </div>

        <button type="submit" className="submit-btn">Reset Password</button>
      </Form>
    </div>
  )
}

export const ResetPassword = withFormik<ResetProps, ResetFormProps>({
  mapPropsToValues: () => ({
    password: ''
  }),
  validationSchema: yup.object().shape({
    password: yup.string().required('Password is required')
  }),
  handleSubmit: (values, { props }) => {
    console.log(values);
    props.history.push('/login');
  }
})(ResetPasswordForm)