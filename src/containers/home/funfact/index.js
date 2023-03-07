import React from "react";
import FunfactItem from "@components/funfact";
import { graphql, useStaticQuery } from "gatsby";
import { SectionArea } from "./style";
import { Col, Container, Row } from "react-bootstrap";

const FunfactArea = () => {
    const funFactorQuery = useStaticQuery(graphql`
        query FunFactorQuery {
            allFunJson {
                edges {
                    node {
                        id
                        title
                        countNumber
                        countAmount
                        shapImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        iconImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const funFactorData = funFactorQuery.allFunJson.edges;

    return (
        <SectionArea>
            <Container>
                <Row className="row-gutter-0 funfact-items-style1">
                    {funFactorData.map((item) => {
                        return (
                            <Col
                                md={4}
                                sm={6}
                                className="funfact-item"
                                key={item.node.id}
                            >
                                <FunfactItem
                                    countNumber={item.node.countNumber}
                                    countAmount={item.node.countAmount}
                                    title={item.node.title}
                                    iconImage={
                                        item.node.iconImage.childImageSharp
                                    }
                                    shapImage={
                                        item.node.shapImage.childImageSharp
                                    }
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default FunfactArea;
