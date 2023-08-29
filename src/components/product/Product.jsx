import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import { ProductSale } from '../product/ProductDiscountCalculation';
import CartAddProduct from '../cart/CartAddProduct';


function Product() {
    const products = useSelector((state) => state.product.products);

    const {id} = useParams();

    const productRes = products.filter(product => product.id === Number(id));
    console.log(productRes);

    return (
        <>
            {
                productRes.map((product) => (
                    <Row key={product.id}>
                        <Col lg="12">
                            <h1 className="title">{product.title}</h1>
                        </Col>
                        <Col lg="7">
                            <div className="product-open__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                        </Col>
                        <Col lg="5">
                            <div className="product-open__info">
                                <ProductSale price={product.price} discont_price={product.discont_price} />
                                <CartAddProduct product_id={product.id}/>
                                <div className="product-open__description">
                                    <p className="product-open__description-title">Description:</p>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                ))
            }
        </>
    )
}

export default Product;