import React, { useState } from 'react';
import './Workflow.scss';

const Workflow = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const handleButtonClick = (option) => { setSelectedOption(option); }

  return(
    <section id="workflow">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className='bold uppercase text-center'>Discover</h4>
            <h1 className='bold text-center'>
              Your <span class='colorized'>proven process.</span></h1>
            <br />

            <div className="row">
              <div className="col-md-12 text-center">
                <button 
                  onClick={() => handleButtonClick(1)} 
                  className='nav-button'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                
                <button 
                  onClick={() => handleButtonClick(2)}
                  className='nav-button'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                
                <button 
                  onClick={() => handleButtonClick(3)}
                  className='nav-button'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                
                <button 
                  onClick={() => handleButtonClick(4)}
                  className='nav-button'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                
                <button 
                  onClick={() => handleButtonClick(5)}
                  className='nav-button'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>

            <div className="row"><br />
              <div class='col-md-12'>
                {selectedOption === 1 && (
                  <div className='row'>
                    <div className='col-md-6 content'>
                      <h4 className='bold'>
                        <i class="fa-regular fa-calendar colorized"></i>
                        1 to 2 weeks
                      </h4>
                      <h1 className='bold'>Planning and Discovery</h1>
                      <p>Understanding your business needs and what you have in mind
                      for the project. Based on this, we determine the scope and cost
                      to create the best solution.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <div className="jumbotron"></div>
                    </div>
                  </div>
                )}

                {selectedOption === 2 && (
                  <div className='row'>
                    <div className='col-md-6 content'>
                      <h4 className='bold'>
                        <i class="fa-regular fa-calendar colorized"></i>
                        2 to 4 weeks
                      </h4>
                      <h1 className='bold'>Interface Design and Usability</h1>
                      <p>If you don't yet have wireframes or UI/UX diagrams
                      for your project, don't worry, we can help. We need well-defined
                      designs before we start building.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <div className="jumbotron"></div>
                    </div>
                  </div>
                )}

                {selectedOption === 3 && (
                  <div className='row'>
                    <div className='col-md-6 content'>
                      <h4 className='bold'>
                        <i class="fa-regular fa-calendar colorized"></i>
                        4+ weeks
                      </h4>
                      <h1 className='bold'>Production</h1>
                      <p>Our engineers use project specifications to create the ideal
                      software for your company, always thinking about the scalability
                      and editability of the final product.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <div className="jumbotron"></div>
                    </div>
                  </div>
                )}

                {selectedOption === 4 && (
                  <div className='row'>
                    <div className='col-md-6 content'>
                      <h4 className='bold'>
                        <i class="fa-regular fa-calendar colorized"></i>
                        1 to 4 weeks
                      </h4>
                      <h1 className='bold'>Test and Warranty of Quality</h1>
                      <p>We perform a battery of manual and automated tests to ensure
                      that your application works predictably and efficiently, following
                      industry best practices.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <div className="jumbotron"></div>
                    </div>
                  </div>
                )}

                {selectedOption === 5 && (
                  <div className='row'>
                    <div className='col-md-6 content'>
                      <h4 className='bold'>
                        <i class="fa-regular fa-calendar colorized"></i>
                        To define
                      </h4>
                      <h1 className='bold'>Delivery and Maintenance</h1>
                      <p>After project completion, we deliver and monitor
                      24/7 to detect and resolve issues. We also offer ongoing
                      maintenance and development services.
                      </p>
                    </div>

                    <div className="col-md-6">
                      <div className="jumbotron"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow;