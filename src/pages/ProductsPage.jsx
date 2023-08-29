import React from 'react';
import { Container } from 'react-bootstrap';

import Products from '../components/products/Products';


function ProductsPage() {
	return (
		<div className="products">
			<Container>
				<Products />
			</Container>
		</div>
	)
}

export default ProductsPage;