import React from 'react';
import { Container } from 'react-bootstrap';

import Cart from '../components/cart/Cart';


function CartPage() {
	return (
		<div className="cart">
			<Container>
				<Cart />
			</Container>
		</div>
	)
}

export default CartPage;