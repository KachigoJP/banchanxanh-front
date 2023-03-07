import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "@components/ui/button";
import { VolunteerFormArea } from "./style";

const VolunteerForm = () => {
    return (
        <VolunteerFormArea>
            <form
                className="volunteer-form-wrapper"
                id="contact-form"
                action="#"
                method="post"
            >
                <Row className="row-gutter-20">
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="First Name"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="Last Name"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="email"
                                name="con_email"
                                placeholder="Email"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="con_age"
                                placeholder="Age"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="con_religion"
                                placeholder="Religion"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="form-group" htmlFor="blogs_name">
                            <input
                                className="form-control"
                                type="text"
                                name="con_phone"
                                placeholder="Phone"
                            />
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="form-group mb-0" htmlFor="blogs_name">
                            <textarea
                                className="form-control textarea"
                                name="con_message"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="form-group mb-0">
                            <Button type="submit" color="gradient">
                                Submit Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </form>
        </VolunteerFormArea>
    );
};

export default VolunteerForm;
