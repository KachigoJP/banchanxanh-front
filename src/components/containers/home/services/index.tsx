import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

// Source
import ServiceItem from "@components/ui/services";
import { ServiceAare } from "./style";
import { ServiceItemData } from "./interface";

const ServiceArea: React.FC = () => {
    const ServiceQuery = useStaticQuery(graphql`
        query ServiceDataQuery {
            allServersJson {
                edges {
                    node {
                        id
                        title
                        parText
                        itemClassName
                        iconImage {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
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

    const ServiceData = ServiceQuery.allServersJson.edges as ServiceItemData[];

    return (
        <ServiceAare>
            <Container>
                <Row className="icon-box-style1">
                    {ServiceData &&
                        ServiceData.map((data) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={data.node.id}>
                                    <ServiceItem
                                        title={data.node.title}
                                        parText={data.node.parText}
                                        slug={data.node.fields.slug}
                                        itemClassName={data.node.itemClassName}
                                        image={data.node.iconImage}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </ServiceAare>
    );
};

export default ServiceArea;
