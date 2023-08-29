import React from 'react';
import { useDispatch } from 'react-redux';

import { removeProductFromCart } from '../../store/actions/cartAction';


function CartRemoveProduct(props) {
    const dispatch = useDispatch();

    const deleteProduct = (id) => {
        dispatch(removeProductFromCart(id));
    }

    return (
        <>
            <button onClick={() => deleteProduct(props.id)} className="cart-product__remove">remove</button>
        </>
    )
}

export default CartRemoveProduct;