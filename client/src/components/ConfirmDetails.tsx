import React from 'react'
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import * as yup from 'yup';


interface RouteParams {

}

interface DetailsProps extends RouteComponentProps<RouteParams> {

}

interface DetailsFormProps {
  firstName: string,
  lastName: string,
  employeeNo: string
};

const ConfirmDetailsForm  = (props: DetailsProps & FormikProps<DetailsFormProps>) => {
  return (
    <div className="f-container">
      <Form className="f-container__form">
        <h2 className="heading main-heading txt--center">Confirm Details</h2>

        <div className="field">
          <Field name="firstName" placeholder="FirstName" className="field__input"/>
          <ErrorMessage component="p" name="firstName" className="field__error" />
        </div>

        <div className="field">
          <Field name="lastName" placeholder="Last Name" className="field__input"/>
          <ErrorMessage component="p" name="lastName" className="field__error" />
        </div>

        <div className="field field--last">
          <Field name="employeeNo" placeholder="Employee No" className="field__input"/>
          <ErrorMessage component="p" name="employeeNo" className="field__error" />
        </div>

        <button type="submit" className="submit-btn">Confirm</button>
      </Form>
    </div>
  )
}

export const ConfirmDetails = withFormik<DetailsProps, DetailsFormProps>({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    employeeNo: ''
  }),
  validationSchema: yup.object().shape({
    employeeNo: yup.string().length(8, 'Employee No. is not valid').required('Employee No. is required'),
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required')
  }),
  handleSubmit: (values, { props }) => {
    console.log(values);
    props.history.push('/resetPassword');
  }
})(ConfirmDetailsForm);
