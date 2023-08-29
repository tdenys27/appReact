import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import ImgBanner from '../../ui/images/banner-sale.png';

import { saleFormAction } from '../../store/actions/saleFormAction';


function SaleForm() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({mode: 'onSubmit'});

    const sendCoupon = (data) => {
        const result = {
            data,
        }
		console.log(result);
        dispatch(saleFormAction(result));
        
        reset();
    };
	return (
		<section className="sale-form">
			<Container>
				<Row className="align-items-center">
					<Col md="6">
						<div className="sale-form__img">
							<img src={ImgBanner} alt="Banner" />
						</div>
					</Col>
					<Col md="6">
						<div className="sale-form__content">
							<h2 className="sale-form__title">5% off</h2>
							<p className="sale-form__description">on the first cart</p>
							<form onSubmit={handleSubmit(sendCoupon)}>
								<input type="phone" {...register('phone', {
									required: true,
								})} className="sale-form__input white-input"  placeholder="Phone number"/>
								{errors?.phone &&  (errors?.phone?.message || 		<span className="error-field"><span className="text-danger">*</span> This field is required</span>)}
								<button className="sale-form__button white-transparent-button btn">Get a discount</button>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SaleForm;