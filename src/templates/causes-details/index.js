/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import CausesDonateForm from "@components/causes-donate-form";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    BlogDetailsArea,
    CausesDetailsContent,
    CausesDetails,
    Thumb,
    CauseTitle,
    DonateInfoWrap,
    DonateInfo,
    InfoItem,
    InfoItemTitle,
    Amount,
    ShortTitle,
    DocumentItem,
    DocumentItemTitle,
    SingleDetailsText,
} from "./style";

const CausesPosts = ({ data, location, pageContext }) => {
    const causespostData = data.causesJson;

    const image = getImage(causespostData.image.childImageSharp);

    return (
        <Layout>
            <SEO title={"Causes Posts"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Causes Posts"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <CausesDetailsContent>
                                <CausesDetails>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt={causespostData.title}
                                        />
                                    </Thumb>
                                    <CauseTitle>
                                        {causespostData.title}
                                    </CauseTitle>
                                    <DonateInfoWrap>
                                        <Row>
                                            <Col md={6}>
                                                <DonateInfo>
                                                    <InfoItem>
                                                        <InfoItemTitle>
                                                            Goal:
                                                        </InfoItemTitle>
                                                        <Amount>$ 5,000</Amount>
                                                    </InfoItem>
                                                    <InfoItem>
                                                        <InfoItemTitle>
                                                            Raised:
                                                        </InfoItemTitle>
                                                        <Amount>$ 2,000</Amount>
                                                    </InfoItem>
                                                    <InfoItem>
                                                        <InfoItemTitle>
                                                            To Go:
                                                        </InfoItemTitle>
                                                        <Amount>$ 1,000</Amount>
                                                    </InfoItem>
                                                </DonateInfo>
                                            </Col>
                                        </Row>
                                    </DonateInfoWrap>
                                    <SingleDetailsText>
                                        {causespostData.detailstext1 &&
                                            causespostData.detailstext1}
                                    </SingleDetailsText>
                                    <SingleDetailsText>
                                        {causespostData.detailstext2 &&
                                            causespostData.detailstext2}
                                    </SingleDetailsText>
                                    <ShortTitle>Cause Challenge</ShortTitle>
                                    <SingleDetailsText>
                                        {causespostData.detailstext3 &&
                                            causespostData.detailstext3}
                                    </SingleDetailsText>
                                    <SingleDetailsText>
                                        {causespostData.detailstext4 &&
                                            causespostData.detailstext4}
                                    </SingleDetailsText>
                                    <ShortTitle>
                                        Summery And Documents
                                    </ShortTitle>
                                    <Row>
                                        <Col sm={6}>
                                            <DocumentItem href="#">
                                                <DocumentItemTitle>
                                                    Summery.pdf
                                                </DocumentItemTitle>
                                                <StaticImage
                                                    src="../../data/images/icons/file.png"
                                                    alt="Icon"
                                                />
                                            </DocumentItem>
                                        </Col>
                                        <Col sm={6}>
                                            <DocumentItem className="bgcolor-theme2">
                                                <DocumentItemTitle href="#">
                                                    Documents.pdf
                                                </DocumentItemTitle>
                                                <StaticImage
                                                    src="../../data/images/icons/file.png"
                                                    alt="Icon"
                                                />
                                            </DocumentItem>
                                        </Col>
                                    </Row>
                                    <SingleDetailsText>
                                        {causespostData.detailstext5 &&
                                            causespostData.detailstext5}
                                    </SingleDetailsText>
                                    <SingleDetailsText>
                                        {causespostData.detailstext6 &&
                                            causespostData.detailstext6}
                                    </SingleDetailsText>
                                </CausesDetails>

                                <CausesDonateForm />
                            </CausesDetailsContent>
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </BlogDetailsArea>
        </Layout>
    );
};

CausesPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const causespostQuery = graphql`
    query CausesPostsBySlug($slug: String!) {
        causesJson(fields: { slug: { eq: $slug } }) {
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
                    gatsbyImageData(width: 780)
                }
            }
            adminImage {
                childImageSharp {
                    gatsbyImageData
                }
            }
            detailstext1
            detailstext2
            detailstext3
            detailstext4
            detailstext5
            detailstext6
            fields {
                slug
            }
        }
    }
`;
export default CausesPosts;
