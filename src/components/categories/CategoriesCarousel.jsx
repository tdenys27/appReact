import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import { responsive } from '../../carouselBreakpoints';
import { Col, Container, Row } from 'react-bootstrap';
import CategoriesItem from './CategoriesItem';


function CatigoriesCarousel() {
    const categories = useSelector(state => state.category.categories);

    return (
        <section className="categories-slider">
            <Container>
                <Row>
                    <Col xs="auto">
                        <h2 className="title">Catalog</h2>
                    </Col>
                    <Col>
                        <Link to="/categories/all" className="btn btn-dark-border categories-slider__btn">All categories</Link>
                    </Col>
                </Row>
                <Carousel responsive={responsive} className="categories-slider__carousel">
                    {
                        categories.map((category) => (
                            <div key={category.id} className="category">
                                <CategoriesItem id={category.id} image={category.image} title={category.title}/>
                            </div>
                        ))
                    }
                </Carousel>
            </Container>
        </section>
    )
}

export default CatigoriesCarousel;