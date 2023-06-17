"use client";
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/logo_.svg";
import SearchIcon from "@/app/assets/images/search_icon.svg";
import UserIcon from "@/app/assets/images/user_icon.svg";
import CartIcon from "@/app/assets/images/cart_fill_icon.svg";
import FavouriteIcon from "@/app/assets/images/heart_fill_icon.svg";
import "./Header.scss";
import Divider from "../Divider/Divider";

const IconWithText = ({ image, text }: { image: string, text: string }) => {
  return (
    <Col md={4} className="text-center navbar-action">
      <Image priority width={22} height={22} alt="medex-logo" src={image} />
      <p className="d-block navbar-action-text">{text}</p>
    </Col>
  )
}
function MegaHeader() {
  return (
    <Fragment>
      <Navbar expand="lg">
        <Container fluid>
          <Row className="w-100 align-items-center">
            <Col md={3} xs={12}>
              <Link href="#" className="normal-case text-xl">
                <Image priority width={230} height={55} alt="medex-logo" src={Logo} />
              </Link>
            </Col>
            <Col md={6} xs={12}>
              <Row>
                <Col xs={1}>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                </Col>
                <Col xs={9}>
                  <Form className="d-flex navbar-search">
                    <Form.Control
                      type="search"
                      placeholder="Search by product name,category and type…"
                      aria-label="Search"
                    />
                    <Button variant="outline-success d-flex justify-content-center">
                      <Image src={SearchIcon} priority width={36} height={36} alt="search-icon" />
                    </Button>
                  </Form></Col>
              </Row>
            </Col>
            <Col md={3} xs={12}>
              <Nav
                className="navbar-actions d-flex flex-row justify-content-evenly"
              >
                  <IconWithText text="Login" image={UserIcon} />
                  <IconWithText text="Favourite" image={FavouriteIcon} />
                  <IconWithText text="My Cart" image={CartIcon} />
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Divider className="divider bg-yellow" />
    </Fragment>
  );
}
export default MegaHeader;