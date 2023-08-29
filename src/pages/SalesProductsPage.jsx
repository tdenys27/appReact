import React from 'react';
import { Container } from 'react-bootstrap';

import SaleProducts from '../components/sale/SaleProducts';


function SalePage() {
	return (
		<div className="products products-sale">
			<Container>
				<SaleProducts />
			</Container>
		</div>
	)
}

export default SalePage;