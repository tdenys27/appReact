import React from 'react';
import { useDispatch } from 'react-redux';

import { incrementProductInCart, decrementProductInCart } from '../../store/actions/cartAction';


function CartProductCount(props) {
    const dispatch = useDispatch();

    const decrement = (id) => {
        dispatch(decrementProductInCart(id));
    }
    const increment = (id) => {
        dispatch(incrementProductInCart(id));
    }

    return (
        <div className="quantity">
            <button className="quantity-btn quantity-minus" onClick={()=>decrement(props.id)}>
                <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="18" height="2" fill="black"/>
                </svg>
            </button>
            <span className="quantity-num">{props.quantity}</span>
            <button className="quantity-btn quantity-plus" onClick={()=>increment(props.id)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="8" width="18" height="2" fill="black"/>
                    <rect x="8" y="18" width="18" height="2" transform="rotate(-90 8 18)" fill="black"/>
                </svg>
            </button>
        </div>
    )
}

export default CartProductCount;