import React from 'react'
import { withFormik, FormikProps, Form, Field, ErrorMessage } from 'formik';


interface ConfirmDetailsFormProps {
  firstName: string,
  lastName: string,
  employeeNo: string
};

const ConfirmDetailsForm = (props: FormikProps<ConfirmDetailsFormProps>) => {
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

export const ConfirmDetails = withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    employeeNo: ''
  }),
  handleSubmit: (values) => {
    console.log(values);
  }
})(ConfirmDetailsForm);
