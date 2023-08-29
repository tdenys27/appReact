import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { currency } from '../../currency';
import Checkout from '../checkout/Checkout';
import CartProductCount from './CartProductCount';
import CartRemoveProduct from './CartRemoveProduct';
import { removeProductsInCart } from '../../store/actions/cartAction';


function Cart() {
	const dispatch = useDispatch();
	const carts = useSelector((state) => state.cart.carts);
	const removeProductCart = () => {
		dispatch(removeProductsInCart());
	}

	return (
    	<>
			<h1 className="title">
				Shopping cart
			</h1>
			<Row>
				<Col lg="8">
					<Row className="cart-buttons align-items-center">
						<Col xs="auto">
							<button onClick={removeProductCart} className="btn btn-danger">Remove all product</button>
						</Col>
						<Col xs="auto ms-auto">
							<Link to="/categories/all" className="cart-back__link">Back to the store</Link>
						</Col>
					</Row>
					{carts.length !== 0 ? (
						<>
							{carts.map((product) => 
								<div className="cart-product__item" key={product.id}>
									<Row className="align-items-center">
										<Col lg="2">
											<CartRemoveProduct id={product.id}/>
											<div className="cart-product__img">
												<img src={product.image} alt="" />
											</div>
										</Col>
										<Col lg="6">
											<Link to={`/products/${product.id}`} className="cart-product__title">{product.title}</Link>
											<Col>
												<CartProductCount id={product.id} quantity={product.quantity}/>
											</Col>
										</Col>
										<Col lg="2">
											<span className="cart-product__price">{product.price}{currency}</span>
										</Col>
										{product.discont_price ? 
											<Col lg="2">
												<span className="cart-product__old-price">{product.discont_price}{currency}</span>
											</Col>
											: null
										}
									</Row>
								</div>
							)}
						</>
					) : (
						<Row>
							<Col>Cart is empty</Col>
						</Row>
					)}
				</Col>
				<Col lg="4">
					<Checkout />
				</Col>
			</Row>
		</>
    )
}

export default Cart