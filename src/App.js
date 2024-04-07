import React from 'react';
import './App.scss';

import Header      from './components/Header/Index';
import Hero        from './components/Hero/Index';
import About       from './components/About/Index';
import Cases       from './components/Cases/Index';
import Workflow    from './components/Workflow/Index';
import Advertising from './components/Advertising/Index';
import Tech        from './components/Tech/Index';
import Brand       from './components/Brand/Index';
import Contact     from './components/Contact/Index';
import Footer      from './components/Footer/Index';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Cases />
      <Workflow />
      <Advertising />
      <Tech />
      <Contact />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
