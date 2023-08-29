import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md="3">
                    <ul className="footer-list">
                        <li className="footer-item">
                            <Link to="/about-us" className="footer-link">About us</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/team" className="footer-link">Team</Link>
                        </li>
                    </ul>
                    </Col>
                    <Col md="3">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="/contact" className="footer-link">Contact</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/our-rules" className="footer-link">Our rules</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="footer-copy">
                    <p>&copy; {year} Garden test react project.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer