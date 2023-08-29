import React from 'react';
import { Col, Container } from 'react-bootstrap';

import ImgBanner from '../../ui/images/banner-flour.png';
import { Link } from 'react-router-dom';


function SaleBanner() {
	return (
		<section className="banner-sale">
			<Container>
				<Col md="7" className="banner-sale__content">
					<h2 className="banner-sale__title">Sale</h2>
					<h4 className="banner-sale__sub-title">New season</h4>
					<Link to="/sale" className="banner-sale__button white-button btn">Sale</Link>
				</Col>
				<div className="banner-sale__img">
					<img src={ImgBanner} alt="Bunner" />
				</div>
			</Container>
		</section>
	)
}

export default SaleBanner;