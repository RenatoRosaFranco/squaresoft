import React, { useState } from 'react';
import './Tech.scss';

const Tech = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => { setSelectedOption(option); }

  return(
    <section id="tech">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className='text-center bold uppercase'>Technologies</h4>
            <h2 className='text-center'>
              <span className='bold colorized' style={{ marginRight: 5 }}>The tools</span>
              behing your success.</h2>
            <br />

            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <button 
                    className='navigation'
                    onClick={() => handleOptionClick(1)}>
                    Front End
                  </button>
                </li>
                <li>
                  <button
                    className='navigation'
                    onClick={() => handleOptionClick(2)}>
                    Backend
                  </button>
                </li>
                <li>
                  <button
                    className='navigation'
                    onClick={() => handleOptionClick(3)}>
                    Mobile
                  </button>
                </li>
                <li>
                  <button 
                    className='navigation'
                    onClick={() => handleOptionClick(4)}>
                    DevOps
                  </button>
                </li>
                <li>
                  <button 
                    className='navigation'
                    onClick={() => handleOptionClick(5)}>
                    Artificial Inteligency
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-md-8">
              <div style={{ display: selectedOption === 1 ? 'block' : 'none' }}>
                <div className="col-md-4">
                  <h3 className='bold colorized'>          
                    <i class="devicon-typescript-plain" style={{ marginRight: 10 }}></i>
                    TypeScript
                  </h3>
                  <p>With TypeScript, we create applications
                  robust and scalable with fewer errors
                  of code and greather readability, offering
                  faster and safer delivery.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-react-original" style={{ marginRight: 10 }}></i>
                    React
                  </h3>
                  <p>With React, we build interfaces
                  high-quality user experience and excellent
                  performance, providing an incredible user experience.</p>
                </div>
              </div>

              <div style={{ display: selectedOption === 2 ? 'block' : 'none' }}>
                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-rails-plain" style={{ marginRight: 10 }}></i>
                    Ruby on Rails
                  </h3>
                  <p>With Ruby on Rails, we create applications
                  of the web quickly and efficiently, offering a complete
                  solution for the backend and a smooth experience for users.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-nodejs-line-wordmark" style={{ marginRight: 10 }}></i>
                    NodeJS
                  </h3>
                  <p>Have fast and scalable applications with NodeJS, a powerful
                  backend technology. Increase the efficiency of your code and provide
                  an incredible experience for your users.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>          
                    <i class="devicon-go-line" style={{ marginRight: 10 }}></i>
                    Golang
                  </h3>
                  <p>Have fast and scalable applications with NodeJS, a powerful
                  backend technology. Increase the efficiency of your code and provide
                  an incredible experience for your users.</p>
                </div>
              </div>

              <div style={{ display: selectedOption === 3 ? 'block' : 'none' }}>
                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-flutter-plain" style={{ marginRight: 10 }}></i>
                    Flutter
                  </h3>
                  <p>Create amazing and dynamic apps with Flutter,
                  cross-platform development technology on the future.
                  Create modern and fluid interfaces, reaching a wide
                  audience and providing a unique experience for its users.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-react-original" style={{ marginRight: 10 }}></i>
                    React Native
                  </h3>
                  <p>With React Native, we create applications
                  amazing furniture with native performance, sharing
                  much of the code between IOS and Android platforms.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-swift-plain" style={{ marginRight: 10 }}></i>
                    Swift
                  </h3>
                  <p>With Swift technology, we created
                  robust and scalable IOs apps. it's clear
                  and concise syntax makes coding a pleasant
                  and productive experience.</p>
                </div>
              </div>
              
              <div style={{ display: selectedOption === 4 ? 'block' : 'none' }}>
                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-docker-plain" 
                    style={{ marginRight: 10 }}></i>
                    Docker
                  </h3>
                  <p>With Docker, we create consistend and
                  portable production environments, increasing efficiency
                  and decreasing time to release new features.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-amazonwebservices-plain-wordmark colorized" 
                    style={{ marginRight: 10 }}></i>
                    AWS
                  </h3>
                  <p>With Amazon Web Services, we provide a reliable,
                  scalable infraestructure for hosting cloud applications and
                  services, providing high availability and security.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-heroku-original" 
                    style={{ marginRight: 10 }}></i>
                    Heroku
                  </h3>
                  <p>With Amazon Web Services, we provide a reliable,
                  scalable infraestructure for hosting cloud applications and
                  services, providing high availability and security.</p>
                </div>
              </div>
              
              <div style={{ display: selectedOption === 5 ? 'block' : 'none' }}>
                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-tensorflow-original" style={{ marginRight: 10 }}></i>
                    TensorFlow
                  </h3>
                  <p>With TensorFlow, we create
                   machine learning and artificial intelligence
                   to solve complex problems, helping companies
                   make decisions more precise and assertive.</p>
                </div>

                <div className="col-md-4">
                  <h3 className='bold colorized'>
                    <i class="devicon-insomnia-plain" style={{ marginRight: 10 }}></i>
                    chatGPT
                  </h3>
                  <p>Transform interactions with your users with chatGPT,
                   an advanced IA that delivers natural, engaging conversations.
                   Offer personalized and efficient service, creating unique
                   experiences for your customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech;