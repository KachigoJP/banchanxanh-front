import React from "react";
import CausesDonateForm from "@components/causes-donate-form";
import { SectionArea } from "./style";
import { Col, Container, Row } from "react-bootstrap";

const DonateArea = (props) => {
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={10} className="m-auto">
                        <CausesDonateForm />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default DonateArea;
