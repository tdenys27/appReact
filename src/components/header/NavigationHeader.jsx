import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function NavigationHeader() {
    const checkAndAddClass = () => {
        return ({isActive}) => (isActive ? 'active' : '');
    };
    
    return (
        <>
            <Navbar.Toggle aria-controls="navbar-nav" className="ms-auto" />
            <Navbar.Collapse id="navbar-nav" className="header-nav justify-content-end">
                <Nav className="header-nav__list">
                    <NavLink to="/" className={checkAndAddClass()}>
                        Main page
                    </NavLink>
                    <NavLink to="/products/all" className={checkAndAddClass()}>
                        All products
                    </NavLink>
                    <NavLink to="/sale" className={checkAndAddClass()}>
                        All sales
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default NavigationHeader;