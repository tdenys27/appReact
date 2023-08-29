import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import ProductsItem from '../products/ProductsItem';


function SaleProducts() {
    const products = useSelector(state => state.product.products);
    const productsWithSale = products.filter(product => product.discont_price !== null);

    const [sortProducts, setSortProducts] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

	const sortedProducts = useMemo(() => {
		if (sortProducts === 'asc') {
			return [...productsWithSale].sort((a, b) => a.price - b.price);
		}
		if (sortProducts === 'desc') {
			return [...productsWithSale].sort((a, b) => b.price - a.price);
		}
		return productsWithSale;
	}, [productsWithSale, sortProducts]);

    const sortedMinProducts = useMemo(() => {
        if (minPrice.length >= 1) {
            return sortedProducts.filter((minProd) => minProd.price >= minPrice);
        }
		return sortedProducts;
	}, [sortedProducts, minPrice]);

    const sortedMaxProducts = useMemo(() => {
        if (maxPrice.length >= 1) {
            return sortedMinProducts.filter((maxProd) => maxProd.price <= maxPrice);
        }
		return sortedMinProducts;
	}, [sortedMinProducts, maxPrice]);


    return (
        <>
            <h1 className="title">Products with sale</h1>
            <Row className="filter">
                <Col md="auto">
                    <label className="filter-label">
                        <span className="filter-label__name">Price</span>
                        <input type="number" className="first-price" placeholder="From" onChange={(e) => setMinPrice(e.target.value)}/>
                        <input type="number" className="last-price" placeholder="To" onChange={(e) => setMaxPrice(e.target.value)}/>
                    </label>
                </Col>
                <Col md="auto">
                    <label className="filter-label">
                        <span className="filter-label__name">Sorted</span>
                        <select value={sortProducts} onChange={(e) => setSortProducts(e.target.value)}>
                            <option value="">by default</option>
                            <option value="asc">Ascending price</option>
                            <option value="desc">Descending price</option>
                        </select>
                    </label>
                </Col>
            </Row>
            <Row md={4} sm={3} xs={2}>
                {sortedMaxProducts.map((product) => (
                    <Col key={product.id} className="product product-panel">
                        <ProductsItem id={product.id} image={product.image} title={product.title} price={product.price} discont_price={product.discont_price}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default SaleProducts;