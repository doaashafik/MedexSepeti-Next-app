"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { itemsIds, sub_categories_logos, sub_categories, main_categories } from './Types';
import "./MegaHeader.scss";


export default function MegaHeader() {
  return (
    <header className="header">
      <Container fluid className="d-flex header-container">
      <Link href="#" className="header-special-offer">
          <p>Special Offers</p>
      </Link>
        {
          itemsIds.map(id => (
            <DropdownButton variant="default" id="dropdown-item-button" key={id} title={<span>{main_categories[id]}</span>}>
              <section className="header-mega-menu">
                <Container fluid>
                  <Row>
                    <Col lg={7} md={12}>
                      <Row>
                        {sub_categories.filter(item => item.id === id).map((category) => {
                          return (
                            <Col lg={4} md={12} key={category.name}>
                              <h6 className="font-bold">{category.name}</h6>
                              {
                                <ul>
                                  {category.categories.map((sub) => (
                                    <li key={sub.name}>{sub.name}</li>
                                  ))}
                                </ul>
                              }
                            </Col>
                          )
                        })}

                      </Row>
                    </Col>
                    <Col md={5} className="d-sm-none d-lg-block">
                      <Row>
                        {sub_categories_logos[id].map((logo) => {
                        return (
                          <Col lg={6} key={logo.id}>
                            <Link href="#" className="d-block mb-4">
                              <Image src={logo.url} className="header-category-logo" alt="category-logo" width={215} height={160} />
                            </Link>
                          </Col>
                        );
                      })}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            </DropdownButton>
          ))
        }
      </Container>
    </header>
  );
}
