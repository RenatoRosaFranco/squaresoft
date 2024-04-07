import React from 'react';
import ContactForm from '../ContactForm/Index';
import './Contact.scss';

const Contact = () => {
  let initialValues = { name: '', email: '', phone: '', details: '', budget: '', release_date: '' }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return(
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className='bold text-center uppercase'>Talk with us</h4>
            <h1 className='bold text-center'>Do you have a 
            <span className='colorized'>project in mind?</span></h1>
          </div>

          <div className="col-md-5 col-md-offset-1">
            <div className="jumbotron"></div>
          </div>

          <div className="col-md-4">
            <ContactForm 
              initialValues={initialValues}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;