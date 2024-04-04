import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';
import clientsData from '../../data/clients.json';
import './Hero.scss';

const HeroSection = memo(() => {
	return(
		<section id="hero">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h1 className='bold'>Create the<br /> 
					ideal website <br />
					for your company</h1>
					
					<p>
						Do you want to increase your sales,
						and expand your customer base? We can
						help you by creating fast, modern and
						high-converting webapps, ensuring that's
						your company is always one step ahead of
						the competition.
					</p>

					<br />
					<button className='btn btn-primary btn-lg top'>
						Contact
					</button>
				</div>
			</div>
		</div>
	</section>
	);
});

const ClientSection = memo(({ clients }) => {
	return(
		<section id="clients">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{ clients.map((client) => (
							<div key={client.id} className="col-md-2 text-center">
								<img src={client.logo} alt={`${client.name} | Logo`} />
							</div>
						))}
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
		<>
			<div className='col-md-4'>
				<HeroSection />
				<Suspense fallback={<div>Loading...</div>}>
					<ClientSection clients={clientsData} />
				</Suspense>
			</div>

			<div className="col-md-8">
				<div className="jumbotron"></div>
			</div>
		</>
	)
}

export default Hero;