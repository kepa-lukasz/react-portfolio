import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import {BsEnvelopeFill, BsAt} from "react-icons/bs"
const Footer = () => {
    return (
        <Container fluid className="pb-3 mt-2 bg-secondary pt-3  fs-3">
            <Row className="d-flex w-100">
                <Col className="col-12 col-sm-6 col-md-4">
                    <ListGroup className="my-1 fs-4">
                        <ListGroup.Item className="text-break text-white bg-success m-0 p-0 ps-2">Wykorzystane Biblioteki: </ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >Axios</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >Bootstrap</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >React-icons</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >React-cookie</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >React-bootstrap</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >React-router-dom</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-12 col-sm-6 col-md-4">
                    <ListGroup className="my-1 fs-4">
                        <ListGroup.Item className="text-break text-white bg-success m-0 p-0 ps-2">Wykorzystane api: </ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >(POST) motivational-quotes1.p.rapidapi.com/motivation</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >(GET) api.jokes.one/jod</ListGroup.Item>
                        <ListGroup.Item className="text-break m-0 p-0 ps-2" >(GET) pniedzwiedzinski.github.io/<wbr/>kalendarz-swiat-nietypowych</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className="col-12col-sm-12 col-md-4 text-white">
                    Projekt opracował Łukasz Kępa&copy;<br/>
                    Jeżeli masz jakies pytania, skontaktuj się ze mną!<br/>
                     <a className="text-warning text-break" href="mailto:lukaszkepa03@gmail.com"><BsEnvelopeFill className="me-1"/>lukaszkepa03<wbr/><BsAt/>gmail.com</a>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;