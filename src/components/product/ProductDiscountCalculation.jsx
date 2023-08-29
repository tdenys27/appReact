import { Col, Row } from "react-bootstrap";
import { currency } from "../../currency";


export const ProductSale = (props) => {
    const discount = '-' + Math.floor((((props.price - props.discont_price) / ((props.price + props.discont_price) / 2)) * 100)) + '%';

    return (
        <Row className="justify-space-between align-items-center">
            {
                props.discont_price > 0 ? 
                    <>
                        <Col className="product-cur__price">
                            {props.price}{currency}
                        </Col>
                        <Col className="product-old__price">
                            {props.discont_price}{currency}
                        </Col>
                        <Col xs="auto" className="product-discount__price">
                            {discount}
                        </Col>
                    </>
                    :
                    <span className="product-cur__price">
                        {props.price}{currency}
                    </span>
            }
        </Row>
    )
}