/** @jsx jsx */
import { jsx } from "theme-ui";
import CausesItem from "@components/causes";
import { SectionArea } from "./style";
import SectionTitle from "@components/title";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";

const CausesArea = () => {
    const causesAreaQuery = useStaticQuery(graphql`
        query CausesAreaQuery {
            allCausesJson {
                edges {
                    node {
                        id
                        title
                        dec
                        donateInfo {
                            amount
                            donateTitle
                        }
                        adminName
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 580)
                            }
                        }
                        adminImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const causesAreaData = causesAreaQuery.allCausesJson.edges;
    console.log("causesAreaData", causesAreaData);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={8} className="m-auto">
                        <SectionTitle
                            textCenter
                            titleStyle
                            sx={{
                                mb: ["30px", "50px", "80px", "110", "123px"],
                            }}
                            title={"Các chuyến leo núi sắp tới"}
                            subTitle={"Hành trình"}
                        />
                    </Col>
                </Row>
                <Row>
                    {causesAreaData &&
                        causesAreaData.slice(0, 3).map((causesData) => {
                            return (
                                <Col
                                    lg={4}
                                    md={6}
                                    sm={6}
                                    key={causesData.node.id}
                                >
                                    <CausesItem
                                        image={causesData.node.image}
                                        title={causesData.node.title}
                                        dec={causesData.node.dec}
                                        slug={causesData.node.fields.slug}
                                        donateInfo={causesData.node.donateInfo}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default CausesArea;
