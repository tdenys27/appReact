import React from 'react';
import { Link } from 'react-router-dom';

import CartAddProduct from '../cart/CartAddProduct';
import { ProductSale } from '../product/ProductDiscountCalculation';


function ProductsItem(props) {
	return (
		<>
			<div className="product-image">
				<Link to={`/products/${props.id}`} className="product-image__link">
					<img src={props.image} alt={props.title} />
				</Link>
				<CartAddProduct product_id={props.id}/>
			</div>
			<div className="product-footer">
				<div className="product-price__box">
					<ProductSale price={props.price} discont_price={props.discont_price} />
				</div>
				<Link to={`/products/${props.id}`} className="product-name">
					{props.title}
				</Link>
			</div>
		</>
	)
}

export default ProductsItem;