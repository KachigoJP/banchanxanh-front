import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

// Source
import FunfactItem from "@components/ui/funfact";
import { SectionArea } from "./style";
import { FunfactItemData } from "./interface";

const FunfactArea: React.FC = () => {
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
    const funFactorData = funFactorQuery.allFunJson.edges as FunfactItemData[];

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
