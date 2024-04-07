import React from 'react';
import './Brand.scss';

const Brand = () => {
  return(
    <section id="brand">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h1 className='bold'>Square</h1>
              <p>Transforming ideas into high-impact<br /> 
              software solutions.</p>
            </div>

            <div className="col-md-6">
              <ul className="list-unstyled list-inline">
                <li><a href='/faq'>FAQ</a></li>
                <li><a href='/team'>Team</a></li>
                <li><a href='/openings'>Openings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand;