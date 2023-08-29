import React from 'react';
import { Container } from 'react-bootstrap';

import Product from '../components/product/Product';


function ProductPage() {
	return (
		<div className="product-open">
			<Container>
				<Product />
			</Container>
		</div>
	)
}

export default ProductPage;