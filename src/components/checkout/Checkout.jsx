import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import CheckoutProductTotal from './CheckoutProductTotal';
import { checkoutAction } from '../../store/actions/checkoutAction';
import { removeProductsInCart } from '../../store/actions/cartAction';


function Checkout() {
    const cartProduct = useSelector((state) => state.cart.carts);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({mode: 'onSubmit'});

    const sendCheckout = (data) => {
        const order = {
            cartProduct,
            data,
        }

        dispatch(removeProductsInCart());
        dispatch(checkoutAction(order));
        
        reset();
    };

    return (
        <div className="order">
            <div className="order-panel">
                <h3 className="order-title">Order details</h3>
                <CheckoutProductTotal />
                <form onSubmit={handleSubmit(sendCheckout)}>
                    <input type="phone" {...register('phone', {
                        required: true,
                    })} className="white-input"  placeholder="Phone number"/>
                    {errors?.phone &&  (errors?.phone?.message || 		<span className="error-field"><span className="text-danger">*</span> This field is required</span>)}
                    <button className="btn btn-success btn-big-success">Order</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout