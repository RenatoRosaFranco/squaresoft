import React from 'react';
import projectsData from '../../data/projects.json';
import './Cases.scss';

const Project = ({ project }) => {
  return(
    <div className="col-md-3">
      <div className="panel panel-default case">
        <div className="panel-body">
          <p className='text-center'>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const Cases = () => {
  return(
    <section id="cases">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className='bold uppercase text-center'>Cases</h4>
            <h1 className='text-center bold'>Discover <span class='colorized'>your projects</span></h1>
            <br />
            
            <div className='row'>
              {projectsData.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cases;