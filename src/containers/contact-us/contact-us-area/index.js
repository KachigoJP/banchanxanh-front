import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ContactForm from "@components/contact-from";
import { StaticImage } from "gatsby-plugin-image";
import {
    SectionArea,
    ContactColunm,
    ContactMapArea,
    ContactInfoContentArea,
    ContactInfoItem,
    ContactIcon,
    ContactInfoContent,
    ContactTitle,
} from "./style";
const ContactUsArea = () => {
    return (
        <SectionArea>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <ContactColunm>
                            <ContactForm />

                            <ContactMapArea>
                                <ContactInfoContentArea>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c1.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Phone</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <a href="tel://+00569876458">
                                                (00) 569 - 876 458
                                            </a>
                                            <a href="tel://+884687549786">
                                                (88) 468-7549 786
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c2.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Email</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <a href="mailto://support@gmail.com">
                                                support@gmail.com
                                            </a>
                                            <a href="mailto://example@gmail.com">
                                                example@gmail.com
                                            </a>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                    <ContactInfoItem>
                                        <ContactIcon>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/icons/c3.png"
                                                alt="Icon"
                                            />
                                        </ContactIcon>
                                        <ContactInfoContent>
                                            <ContactTitle>Address</ContactTitle>
                                            <StaticImage
                                                className="icon-img"
                                                src="../../../data/images/shape/line-s1.png"
                                                alt="Image-Givest"
                                            />
                                            <p>
                                                Norwegian St #APT 807 <br />
                                                Pottsville, Pennsya (PA)
                                            </p>
                                        </ContactInfoContent>
                                    </ContactInfoItem>
                                </ContactInfoContentArea>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"
                                ></iframe>
                            </ContactMapArea>
                        </ContactColunm>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default ContactUsArea;
