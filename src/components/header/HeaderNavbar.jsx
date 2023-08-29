import { Navbar, Container, Col, Row } from "react-bootstrap";

import LogoHeader from "./LogoHeader";
import CatalogHeader from "./CatalogHeader";
import NavigationHeader from "./NavigationHeader";
import CartHeader from "./CartHeader";


function HeaderNavbar() {
  return (
    <>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="header shadow-sm">
            <Container>
				<Row className="align-items-center">
					<Col xs="auto" md="2" xl="1" >
						<LogoHeader />
					</Col>
					<Col xs="auto" md="3 ps-md-5">
						<CatalogHeader />
					</Col>
					<Col xs="auto ms-auto" lg="6">
						<NavigationHeader />
					</Col>
					<Col xs="auto" md="auto ms-auto">
						<CartHeader />
					</Col>
				</Row>
			</Container>
        </Navbar>
    </>
  )
}

export default HeaderNavbar;