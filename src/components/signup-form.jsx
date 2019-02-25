import React, { Component } from 'react';
import Header from '../components/header';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

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
                  password: '',
                  firstName: '',
                  lastName: '',
                  queens: {
                    email: '',
                    netID: '',
                    studentNum: ''
                  },
                  driver: {
                    age: '',
                    license: 'Canadian Full',
                    car: ''
                  },
                  notes: {
                    dietary: '',
                    other: ''
                  }


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
                    axios.post('/signup', values).then(res => {
                      console.log(res);
                    });
                    setSubmitting(false);
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

                  <label>First Name</label>
                  <Field type="text" name="firstName" placeholder="Alec" />
                  <ErrorMessage name="firstName" component="p" className="field-error" />

                  <label>Last Name</label>
                  <Field type="text" name="lastName" placeholder="Glover" />
                  <ErrorMessage name="lastName" component="p" className="field-error" />

                  <label>Queen's Email</label>
                  <Field type="email" name="queens.email" placeholder="15aeg1@queensu.ca" />
                  <ErrorMessage name="queens.email" component="p" className="field-error" />

                  <label>Net ID</label>
                  <Field type="text" name="queens.netID" placeholder="15aeg1" />
                  <ErrorMessage name="queens.netID" component="p" className="field-error" />

                  <label>Student Number</label>
                  <Field type="text" name="queens.studentNum" placeholder="20009924" />
                  <ErrorMessage name="queens.studentNum" component="p" className="field-error" />

                  <label>Age</label>
                  <Field type="text" name="driver.age" placeholder="21" />
                  <ErrorMessage name="driver.age" component="p" className="field-error" />

                  <label>License</label>
                  <Field component="select" name="driver.license">
                    <option value="Canadian Full">Canadian Full</option>
                    <option value="Foreign Full">Foreign Full</option>
                    <option value="Useless">Something Else</option>
                  </Field>
                  <ErrorMessage name="driver.license" component="p" className="field-error" />

                  <label>Do you have a car?</label>
                  <Field type="text" name="driver.car" placeholder="I have a bike" />
                  <ErrorMessage name="driver.car" component="p" className="field-error" />

                  <label>Dietary Restrictions</label>
                  <Field type="text" name="notes.dietary" placeholder="Peanuts...... children" />
                  <ErrorMessage name="notes.dietary" component="p" className="field-error" />

                  <label>Anything Else?</label>
                  <Field type="text" name="notes.other" placeholder="I'm afraid of my shadow" />
                  <ErrorMessage name="notes.other" component="p" className="field-error" />

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

export default SignupForm;
