import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import clientsData from '../../data/clients.json';
import './Hero.scss';

const handleContactClick = () => {
	window.open('https://form.typeform.com/to/zi7Gf4of', '_self	');
}

const HeroSection = memo(() => {
	return(
		<div className="col-md-12">
			<h1 className='bold'><span class='colorized'>Create the<br /> 
			ideal software</span> for your startup</h1>
			
			<p>
				Customized and scalable for<br />
				grow your business, with technology<br />
				cutting-edge and agile methodologies.
			</p>

			<br />
			<button 
				onClick={handleContactClick}
				className='btn btn-primary btn-lg top'>
				Contact
			</button>
		</div>
	);
});

const ClientSection = memo(({ clients }) => {
	return(
		<section id="clients">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className='row'>
							{ clients.map((client) => (
								<div key={client.id} className="col-md-2 text-center">
									<img src={client.logo} alt={`${client.name} | Logo`} className='logo'/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});

ClientSection.propTypes = {
	clients: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		linkUrl: PropTypes.string.isRequired,
	})).isRequired
};

const Hero = () => {
	return(
		<section id='hero'>
			<div class='container'>
				<div className="row">
					<div className="col-md-12">
						<div className="row">
							<div className='col-md-4'>
								<HeroSection />
								<Suspense fallback={<div>Loading...</div>}>
									<ClientSection clients={clientsData} />
								</Suspense>
							</div>

							<div className="col-md-8">
								<div className="jumbotron"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero;