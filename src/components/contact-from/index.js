import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import {
    ContactFormArea,
    Form,
    SectionTitle,
    Subtitle,
    Title,
    SectionDec,
    FormGroup,
    Input,
    Textarea,
} from "./style";

const ContactForm = () => {
    return (
        <ContactFormArea>
            <Row>
                <Col lg={12}>
                    <SectionTitle>
                        <Subtitle>Contact Now</Subtitle>
                        <Title>Get In Touch.</Title>
                        <SectionDec>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting typesetting remaining essentially
                            unchanged.
                        </SectionDec>
                    </SectionTitle>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Form action="#" method="post">
                        <Row className="row-gutter-20">
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_name"
                                        placeholder="Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="email"
                                        name="con_email"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_phone"
                                        placeholder="Phone"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Textarea
                                        name="con_message"
                                        placeholder="Message"
                                    ></Textarea>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Submit Now
                                    </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </ContactFormArea>
    );
};

export default ContactForm;
