/** @jsx jsx */
import { jsx } from "theme-ui";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { graphql, useStaticQuery } from "gatsby";
import MissionBox from "@components/mission";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    SectionArea,
    LayerStyle,
    Thumb,
    AboutTextStyle,
    AboutContent,
    ContentBoxWrp,
} from "./style";

const AboutPageArea = () => {
    const aboutSectonQery = useStaticQuery(graphql`
        query AboutPageQuery {
            aboutUsJson {
                id
                section_title {
                    title
                    subTitle
                }
                content1
                content2
                image1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                mission {
                    id
                    VerientClassName
                    text1
                    text2
                    title
                }
            }
        }
    `);

    const {
        section_title: { title, subTitle },
        image1,
        content1,
        content2,
        content3,
        mission,
    } = aboutSectonQery.aboutUsJson;

    const imageOne = getImage(image1);

    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col lg={9}>
                        <SectionTitle
                            sx={{ mb: "30px" }}
                            showImage={false}
                            title={title}
                            subTitle={subTitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} xl={4}>
                        <LayerStyle>
                            <Thumb>
                                <GatsbyImage
                                    image={imageOne}
                                    className="img-one"
                                    alt="Image-Givest"
                                />
                            </Thumb>
                        </LayerStyle>
                    </Col>
                    <Col lg={8} xl={8}>
                        <AboutContent>
                            <AboutTextStyle>{content1}</AboutTextStyle>
                            <p>{content2}</p>
                            <p className="mb-0">{content3}</p>
                        </AboutContent>
                        <ContentBoxWrp>
                            <Row>
                                {mission.map((itemData) => {
                                    return (
                                        <Col
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            key={itemData.id}
                                        >
                                            <MissionBox
                                                title={itemData.title}
                                                text1={itemData.text1}
                                                text2={itemData.text2}
                                                VerientClassName={
                                                    itemData.VerientClassName
                                                }
                                            />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </ContentBoxWrp>
                    </Col>
                </Row>
            </Container>
        </SectionArea>
    );
};

export default AboutPageArea;
