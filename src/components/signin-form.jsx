import React, { Component } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.apiLogin = this.apiLogin.bind(this);

  }

  apiLogin(data) {

  }
  render() {
    return (
          <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                 }}
                validate={values => {
                  let errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    axios.post('/login', {email: values.email, password: values.password})
                    .then(res => {
                      console.log(res);
                    });                    setSubmitting(false);
                  }, 400);
                }}
              >
              {({ isSubmitting }) => (
                <Form className='general-form'>

                  <label>Email</label>
                  <Field type="email" name="email" placeholder="alec@gloverandboos.com" />
                  <ErrorMessage name="email" component="p" className="field-error" />

                  <label>Password</label>
                  <Field type="password" name="password" placeholder="Password" />
                  <ErrorMessage name="password" component="p" className="field-error" />

                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>

              </div>
            </div>
          </div>
      </section>
    );
  }
}
//functions

export default SigninForm;
