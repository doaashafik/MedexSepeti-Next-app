"use client"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { OffCanvasType } from './Types';
import Navbar from 'react-bootstrap/Navbar';

function OffCanvasComponent({ handleShow, handleClose, show }: OffCanvasType) {

    return (
        <>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className="justify-content-end">
                </Offcanvas.Header>
            </Offcanvas>
        </>
    );
}

export default OffCanvasComponent;