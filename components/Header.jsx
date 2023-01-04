import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "../public/logo.png";
import styles from "../styles/header/Header.module.css";

const Header = () => {
  return (
    <div>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className={styles.headerContainer}>
                <Image src={logo} alt="logo"></Image>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HashCode
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <nav className={styles.navMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                  </nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      {/* <header className={styles.headerContainer}>
        <div>
          <Image src={logo} alt="logo"></Image>
        </div>

        <nav className={styles.navMenu}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header> */}
    </div>
  );
};

export default Header;
