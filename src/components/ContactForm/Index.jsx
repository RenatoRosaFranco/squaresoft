import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactSchema from '../../schemas/ContactSchema';
import './ContactForm.scss';

const ContactForm = ({ initialValues, onSubmit }) => {
  return(
  <Formik
    initialValues={initialValues}
    validationSchema={ContactSchema}
    onSubmit={onSubmit}
  >
    {formik => (
      <Form id='form'>
        <div className="field">
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' className='form-control' placeholder='Name' />
          <ErrorMessage name='name' component='div' className='error-message' />
        </div>

        <div className="field">
          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' className='form-control' placeholder='E-mail' />
          <ErrorMessage name='email' component='div' className='error-message' />
        </div>

        <div className="field">
          <label htmlFor='phone'>Phone</label>
          <Field name='phone' type='text' className='form-control' placeholder='Phone'/>
          <ErrorMessage name='phone' component='div' className='error-message' />
        </div>

        <div className="field">
          <label htmlFor='details'>Details</label>
          <Field name='details' as='textarea' className='form-control' placeholder='Project Details'/>
          <ErrorMessage name='details' component='div' className='error-message' />
        </div>

        <div className="field">
          <label htmlFor="budget">Budget</label>
          <Field name='budget' type='text' className='form-control' placeholder='Budget' />
          <ErrorMessage name='budget' component='div' className='error-message' />
        </div>

        <div className="field">
          <label htmlFor='release_date'>Release Date</label>
          <Field name='release_date' type='date' className='form-control' />
          <ErrorMessage name='release_date' component='div' className='error-message' />
        </div>
        
        <br />
        <button type='submit' disabled={formik.isSubmitting}
          className='btn btn-primary btn-lg top'>
          Submit
        </button>
      </Form>
    )}
  </Formik>
  )
}

export default ContactForm;