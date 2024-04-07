import React from 'react';
import './Footer.scss';

const Footer = () => {
  return(
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <h3 className='bold'>Square Soluções LTDA.</h3>
              <p>R. Cândido Falcão 1155, São Borja<br /> Rio Grande do Sul 9767-000</p>
              <p><span className='bold'>CNPJ</span>: 34.925.018/0001-16</p>
            </div>

            <div className="col-md-2">
              <h3 className='bold'>Contact</h3>
              <p>hello@square.com</p>
              <p>+1 (987) 474-4515</p>
            </div>

            <div className="col-md-6 text-center social">
              <h3 className='bold'>Redes sociais</h3>
              <div className="ul list-unstyled list-inline">
                <li>
                  <a href='https://facebook.com/'>
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href='https://instagram.com/'>
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href='https://linkedin.com/'>
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/'>
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href='https://medium.com/'>
                    <i class="fa-brands fa-medium"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;