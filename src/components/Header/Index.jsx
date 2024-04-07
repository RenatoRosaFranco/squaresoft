import React from 'react';
import './Header.scss';

const Header = () => {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log(selectedLanguage);
  }

  return (
    <section id="header">
      <nav className="navbar navbar-default">
        <div className="container container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a 
            className="navbar-brand bold uppercase" 
            href="/">
              Square
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
            <li className="nav-item dropdown" style={{ marginTop: 0 }}>
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown" 
                role="button" aria-haspopup="true" aria-expanded="false">
                  <img src='assets/flags/usa.png' className='flag' alt='Locale | flag'/>
                  EN <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#" onClick={() => handleLanguageChange('en')}>
                      <img src='assets/flags/usa.png' className='flag' alt='EN | flag'/>
                      English
                    </a>
                  </li>
                  <li>
                    <a href="/#" onClick={() => handleLanguageChange('pl')}>
                      <img src='assets/flags/pl.png' className='flag' alt='PL | flag'/>
                      Polish
                    </a>
                  </li>
                  <li>
                    <a href="/#" onClick={() => handleLanguageChange('de')}>
                      <img src='assets/flags/de.png' className='flag' alt='DE | flag'/>
                      Deutsch
                    </a>
                  </li>
                  <li>
                    <a href="/#" onClick={() => handleLanguageChange('br')}>
                      <img src='assets/flags/br.png' className='flag' alt='PT-BR | flag'/>
                      Portuguese
                    </a>  
                  </li>
                  <li>
                    <a href="/#" onClick={() => handleLanguageChange('es')}>
                      <img src='assets/flags/es.png' className='flag' alt='ES | flag'/>
                      Spanish
                    </a>
                  </li>
                </ul>
              </li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#cases">Cases</a></li>
              <li>
                <button className='btn btn-primary btn-lg'>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;