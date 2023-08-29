import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { currency } from '../../currency';


function CheckoutProductTotal() {
    const cartProductCheckout = useSelector((state) => state.cart.carts);
	let cartProductCheckoutSum = 0;
    if (cartProductCheckout.length !== 0) {
		cartProductCheckoutSum = cartProductCheckout.map((product) => product.price * product.quantity).reduce((acc, elem) => acc + elem);
	}

    return (
        <Row className="order-total">
            <Col className="order-total__title">Total</Col>
            <Col md="auto" className="order-total__result ms-auto">
                {cartProductCheckoutSum} 
                {currency}
            </Col>
        </Row>
    )
}

export default CheckoutProductTotal;