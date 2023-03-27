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
                        <Subtitle>Liên hệ với chúng tôi</Subtitle>
                        <Title>Get In Touch.</Title>
                        <SectionDec>Cảm ơn bạn đã để lại ý kiến. Chúng tôi sẽ sớm liên lạc lại với bạn.</SectionDec>
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
                                        placeholder="Họ tên"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="email"
                                        name="con_email"
                                        placeholder="Địa chỉ Email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup htmlFor="inputs_name">
                                    <Input
                                        type="text"
                                        name="con_phone"
                                        placeholder="Số điện thoại"
                                    />
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Textarea
                                        name="con_message"
                                        placeholder="Nội dung tin nhắn"
                                    ></Textarea>
                                </FormGroup>
                            </Col>
                            <Col lg={12}>
                                <FormGroup>
                                    <Button type="submit" color="gradient">
                                        Gửi tin nhắn
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
