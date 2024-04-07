import React from 'react';
import servicesData from '../../data/services.json';
import './About.scss';

const Service = ({ service }) => {
  return(
    <div className="col-md-6">
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h1 className='bold colorized'>
            <i class={service.icon}></i>
          </h1>
          <h3 className='bold'>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </div>  
  );
};

const About = () => {
  return(
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className='bold text-center uppercase'>About</h4>
            <h2 className='bold text-center'>Transform <span className='colorized'>your company</span></h2>
            <p className='text-center'>We believe that technology should be an ally
            for the growth and<br /> success of companies. therefore,
            we offer customized solutions to<br /> meet the unique
            needs of each business.</p>
            <br />

            <div className="row">
              <div class='col-md-8 col-md-offset-2'>
                {servicesData.map((service) => (
                  <Service key={service.id} service={service} />
                ))}
              </div>
            </div>

            <div className="row"><br />
              <div className="col-md-12 text-center">
                <a href='#'>
                  Learn about your workflow
                  <i class="fa-solid fa-right-long colorized"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;