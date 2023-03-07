import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import {
    SectionArea,
    TitleWrap,
    TestimonialContent,
    NavigationWrap,
} from "./style";
import TestimonialItem from "@components/testimonial";
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const TestimonialArea = () => {
    const testimonialQuery = useStaticQuery(graphql`
        query TestimonialQuery {
            allTestimonialJson {
                edges {
                    node {
                        id
                        clientName
                        clientSaidText
                        clientDesignation
                        clientImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const testimonialData = testimonialQuery.allTestimonialJson.edges;

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col md={12} lg={4} xl={5}>
                        <TitleWrap>
                            <SectionTitle
                                titleStyle
                                textWhate
                                texttheme
                                sx={{
                                    mb: [
                                        "30px",
                                        "50px",
                                        "80px",
                                        "110",
                                        "123px",
                                    ],
                                }}
                                subTitle={"Recent Events"}
                                title={"What People Say About Us."}
                            />
                        </TitleWrap>
                    </Col>
                    <Col md={12} lg={7} xl={6}>
                        <TestimonialContent>
                            <div className="testimonial-slider-content">
                                <Swiper
                                    layout={{
                                        nav: "testimonial-slider-navigation",
                                        dots: "testimonial-dots-style",
                                    }}
                                    effect
                                    slidesPerView={1}
                                    spaceBetween={0}
                                >
                                    {testimonialData &&
                                        testimonialData.map((item) => {
                                            return (
                                                <SwiperSlide key={item.node.id}>
                                                    <TestimonialItem
                                                        client={
                                                            item.node.clientName
                                                        }
                                                        clientSaidText={
                                                            item.node
                                                                .clientSaidText
                                                        }
                                                        clientDesignation={
                                                            item.node
                                                                .clientDesignation
                                                        }
                                                        clientImage={
                                                            item.node
                                                                .clientImage
                                                                .childImageSharp
                                                        }
                                                    />
                                                </SwiperSlide>
                                            );
                                        })}
                                </Swiper>
                                <NavigationWrap>
                                    <div className="swiper-button-next">
                                        <StaticImage
                                            className="icon-img"
                                            src="../../../data/images/icons/test-arrow-left.png"
                                            alt="Image-Icon"
                                        />
                                    </div>
                                    <div className="swiper-button-prev">
                                        <StaticImage
                                            className="icon-img"
                                            src="../../../data/images/icons/test-arrow-right.png"
                                            alt="Image-Icon"
                                        />
                                    </div>
                                </NavigationWrap>
                            </div>
                        </TestimonialContent>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default TestimonialArea;
