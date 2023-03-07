/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import Button from "@components/ui/button";
import { SectionArea, SectionLetArea } from "./style";
import Team from "@components/team";
import Swiper, { SwiperSlide } from "@components/swiper";
import { graphql, useStaticQuery } from "gatsby";

const VolunteerArea = () => {
    const volunteerQuery = useStaticQuery(graphql`
        query VolunteerQuery {
            volunteerJson {
                id
                section_title {
                    title
                    subTitle
                }
                text
                team {
                    designation
                    name
                    images {
                        childrenImageSharp {
                            gatsbyImageData(width: 580)
                        }
                    }
                }
            }
        }
    `);
    const {
        section_title: { title, subTitle },
        text,
        team,
    } = volunteerQuery.volunteerJson;
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col
                        lg={{ span: 6, offset: 3 }}
                        xl={{ span: 4, offset: 0 }}
                    >
                        <SectionLetArea sx={{ mb: "60px" }}>
                            <SectionTitle
                                sx={{ mb: "50px" }}
                                titleStyle
                                title={title}
                                subTitle={subTitle}
                            />
                            <div className="desc">
                                <p>{text}</p>
                                <Button
                                    sx={{ mt: "30px" }}
                                    color="gradient"
                                    path="/volunteer"
                                >
                                    Join Now{" "}
                                    <i className="flaticon-right-arrow"></i>
                                </Button>
                            </div>
                        </SectionLetArea>
                    </Col>
                    <Col xl={8}>
                        <div className="team-member-items">
                            <Swiper
                                layout={{
                                    nav: "testimonial-slider-navigation",
                                    dots: "testimonial-dots-style",
                                }}
                                effect
                                autoPlay={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    480: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {team &&
                                    team.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <Team
                                                    name={item.name}
                                                    designation={
                                                        item.designation
                                                    }
                                                    images={
                                                        item.images
                                                            .childrenImageSharp[0]
                                                    }
                                                />
                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default VolunteerArea;
