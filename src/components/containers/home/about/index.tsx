import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import { useTranslation } from "react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Tilt from "react-parallax-tilt";

// Source
import SectionTitle from "@components/common/title";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
} from "./style";

const AboutArea: React.FC = () => {
    const { t } = useTranslation();
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutSectonQuery {
            aboutJson {
                section_title {
                    subTitle
                    title
                }
                image1 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                image2 {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
                content1
                content2
                content3
                listText1
                listText2
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        image1,
        image2,
        content1,
        content2,
        content3,
        listText1,
        listText2,
    } = aboutSectonQery.aboutJson;

    const imageOne = getImage(image1);
    const imageTwo = getImage(image2);

    return (
        <SectionArea id="about-us">
            <Container>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            css={{ mb: "30px" }}
                            showImage={false}
                            title={title}
                            subTitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} xl={7}>
                        <LayerStyle>
                            <Thumb>
                                <Row className="m-0">
                                    <Col sm={4} md={4} xl={4} lg={4}>
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            {imageOne ? (
                                                <GatsbyImage
                                                    image={imageOne}
                                                    className="img-one"
                                                    alt="Image-Givest"
                                                />
                                            ) : null}
                                        </Tilt>
                                    </Col>
                                    <Col
                                        sm={8}
                                        md={8}
                                        lg={12}
                                        xl={8}
                                        className="tilt-animation"
                                    >
                                        <Tilt
                                            className=" js-tilt"
                                            scale={1.04}
                                            tiltReverse={true}
                                            tiltMaxAngleX={15}
                                            tiltMaxAngleY={15}
                                            perspective={3000}
                                            transitionSpeed={4000}
                                        >
                                            {imageTwo ? (
                                                <GatsbyImage
                                                    image={imageTwo}
                                                    className="img-two"
                                                    alt="Image-Givest"
                                                />
                                            ) : null}
                                        </Tilt>
                                    </Col>
                                </Row>
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={6} xl={5}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p>{content2}</p>
                            <p className="mb-0">{content3}</p>
                        </AboutContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutArea;
