import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function CartHeader() {
	const cartProduct = useSelector((state) => state.cart.carts);
	let cartProductSum = 0;
	if (cartProduct.length !== 0) {
		cartProductSum = cartProduct.map((product) => product.quantity).reduce((acc, elem) => acc + elem);
	}

	return (
		<>
			<Link to="/cart" className="cart-link">
				<span className="cart-link__count">{cartProductSum}</span>
				<i className="cart-link__icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
						<g id="icons8-shopping_bag 1">
						<path id="Vector" d="M15.0001 0.599976C11.679 0.599976 9.0001 3.27888 9.0001 6.59998V7.79998H4.25635L4.2001 8.32498L1.8001 29.325L1.7251 30H28.2751L28.2001 29.325L25.8001 8.32498L25.7438 7.79998H21.0001V6.59998C21.0001 3.27888 18.3212 0.599976 15.0001 0.599976ZM15.0001 1.79998C17.679 1.79998 19.8001 3.92107 19.8001 6.59998V7.79998H10.2001V6.59998C10.2001 3.92107 12.3212 1.79998 15.0001 1.79998ZM5.34385 8.99998H9.0001V10.3687C8.6415 10.5773 8.4001 10.957 8.4001 11.4C8.4001 12.0633 8.93682 12.6 9.6001 12.6C10.2634 12.6 10.8001 12.0633 10.8001 11.4C10.8001 10.957 10.5587 10.5773 10.2001 10.3687V8.99998H19.8001V10.3687C19.4415 10.5773 19.2001 10.957 19.2001 11.4C19.2001 12.0633 19.7368 12.6 20.4001 12.6C21.0634 12.6 21.6001 12.0633 21.6001 11.4C21.6001 10.957 21.3587 10.5773 21.0001 10.3687V8.99998H24.6563L26.9251 28.8H3.0751L5.34385 8.99998Z" fill="black"/>
						</g>
					</svg>
				</i>
			</Link> 
		</>
	)
}

export default CartHeader