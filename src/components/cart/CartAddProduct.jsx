import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addProductToCart } from '../../store/actions/cartAction';


function CartAddProduct(props) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product);

    const addToCart = (productId) => {
        const cartProduct = products.products.filter((product) => product.id === productId);
        const cartProductObj = cartProduct.shift();

        dispatch(addProductToCart(cartProductObj));
    }

    return (
        <>
            <Button className="product-add__cart btn btn-success btn" onClick={() => addToCart(props.product_id)}>Add to cart</Button>
        </>
    )
}

export default CartAddProduct;