import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

// Source
import FunfactItem from "@components/ui/funfact-item";
import { SectionArea } from "./style";
import { FunfactItemData } from "./interface";

const FunfactArea: React.FC = () => {
    const ImagesQuery = useStaticQuery(graphql`
        query ImagesQuery {
            allImagesJson {
                edges {
                    node {
                        f1IconImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                        shap4Image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `);
    const funFactorData = ImagesQuery.allImagesJson.edges[0] as FunfactItemData;

    return (
        <SectionArea>
            <Container>
                <Row className="row-gutter-0 funfact-items-style1">
                    <Col md={4} sm={6} className="funfact-item">
                        <FunfactItem
                            countNumber={520}
                            countSymbol="K"
                            title={"dddd"}
                            iconImage={funFactorData.node.f1IconImage}
                            shapImage={funFactorData.node.shap4Image}
                        />
                    </Col>

                    <Col md={4} sm={6} className="funfact-item">
                        <FunfactItem
                            countNumber={500}
                            countSymbol="M"
                            title={"eeee"}
                            iconImage={funFactorData.node.f1IconImage}
                            shapImage={funFactorData.node.shap4Image}
                        />
                    </Col>

                    <Col md={4} sm={6} className="funfact-item">
                        <FunfactItem
                            countNumber={20}
                            countSymbol="+"
                            title={"fff"}
                            iconImage={funFactorData.node.f1IconImage}
                            shapImage={funFactorData.node.shap4Image}
                        />
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default FunfactArea;
