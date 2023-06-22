"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import usePopper from "@restart/ui/usePopper";
import debounce from "lodash/debounce";
import {
  itemsIds,
  sub_categories_logos,
  sub_categories,
  main_categories,
} from "./Types";
import "./MegaHeader.scss";


export default function MegaHeader() {
  const {
    isListOpen,
    debounceMouseEnter,
    setListOpen,
    styles,
    attributes,
    setPopperElement,
    setReferenceElement,
  } = useHookMegaHeader();

  return (
    <header className="header">
      <Container fluid className="d-flex">
        <ul
          className="d-flex justify-content-between dropdown-list"
          ref={setReferenceElement}
        >
          <li>
            {" "}
            <Link href="#" className="d-block header-special-offer">
              <p>Special Offers</p>
            </Link>
          </li>
          {itemsIds.map((id) => (
            <li
              key={id}
              onMouseLeave={() =>  debounceMouseEnter(null)}
              onMouseEnter={() => debounceMouseEnter(id)}
            >
              <Link
                href="#"
                className="d-flex align-items-center w-100 h-100 dropdown-toggle"
              >
                {main_categories[id]}
              </Link>
              <section
                className={`w-100 dropdown-menu ${
                  isListOpen === id ? "show-dropdown-menu" : ""
                }`}
                ref={setPopperElement}
                {...attributes.popper}
                style={styles.popper as object}
              >
                <Container fluid>
                  <Row>
                    <Col lg={7} md={12}>
                      <Row>
                        {sub_categories
                          .filter((item) => item.id === id)
                          .map((category) => {
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
                            );
                          })}
                      </Row>
                    </Col>
                    <Col md={5} className="d-sm-none d-lg-block">
                      <Row>
                        {sub_categories_logos[id].map((logo) => {
                          return (
                            <Col lg={6} key={logo.id}>
                              <Link href="#" className="d-block mb-4">
                                <Image
                                  src={logo.url}
                                  className="header-category-logo"
                                  alt="category-logo"
                                  width={215}
                                  height={160}
                                />
                              </Link>
                            </Col>
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </section>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}



function useHookMegaHeader() {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });
  const [isListOpen, setListOpen] = React.useState<number | null>(null);
const debounceMouseEnter = debounce((id) => setListOpen(id), 200);
  return {
    isListOpen,
    setListOpen,
    debounceMouseEnter,
    styles,
    attributes,
    setPopperElement,
    setReferenceElement
  };
}