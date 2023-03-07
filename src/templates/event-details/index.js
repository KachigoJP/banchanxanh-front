/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql, Link } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import Button from "@components/ui/button";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    EventDetailsArea,
    EventDetailsContentArea,
    EventDetails,
    Thumb,
    MapContent,
    EventTimeInfo,
    InfoItem,
    EventItemIcon,
    EventItemTitle,
    EventCategoryPost,
    EventCategory,
    EventAuthor,
    EventTitle,
    DetailsText,
    InnerTitle,
    ButtonWrap,
} from "./style";

const EventPosts = ({ data, location, pageContext }) => {
    const eventpostData = data.eventJson;
    const image = getImage(eventpostData.thumbImg.childImageSharp);

    return (
        <Layout>
            <SEO title={"Event Posts"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Event Posts"
            />
            <EventDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <EventDetailsContentArea>
                                <EventDetails>
                                    <Thumb>
                                        <GatsbyImage
                                            image={image}
                                            alt="Image-Givest"
                                        />
                                    </Thumb>
                                    <EventTimeInfo>
                                        <InfoItem>
                                            <EventItemIcon>
                                                <StaticImage
                                                    src="../../data/images/icons/e1.png"
                                                    alt="Icon-Image"
                                                />
                                            </EventItemIcon>
                                            <EventItemTitle>
                                                {eventpostData.eventDate}
                                            </EventItemTitle>
                                        </InfoItem>
                                        <InfoItem>
                                            <EventItemIcon>
                                                <StaticImage
                                                    src="../../data/images/icons/e2.png"
                                                    alt="Icon-Image"
                                                />
                                            </EventItemIcon>
                                            <EventItemTitle>
                                                {eventpostData.eventTime}
                                            </EventItemTitle>
                                        </InfoItem>
                                        <InfoItem>
                                            <EventItemIcon>
                                                <StaticImage
                                                    src="../../data/images/icons/e3.png"
                                                    alt="Icon-Image"
                                                />
                                            </EventItemIcon>
                                            <EventItemTitle>
                                                {eventpostData.eventAddress}
                                            </EventItemTitle>
                                        </InfoItem>
                                    </EventTimeInfo>
                                    <EventCategoryPost>
                                        <EventCategory>
                                            {eventpostData.eventSubject}
                                        </EventCategory>
                                        <EventAuthor>
                                            By: {eventpostData.eventSpeaker},
                                            <span>Web Technologist</span>
                                        </EventAuthor>
                                    </EventCategoryPost>
                                    <EventTitle>
                                        {eventpostData.title}
                                    </EventTitle>
                                    <DetailsText>
                                        {eventpostData.detailsText1 &&
                                            eventpostData.detailsText1}
                                    </DetailsText>
                                    <DetailsText>
                                        {eventpostData.detailsText2 &&
                                            eventpostData.detailsText2}
                                    </DetailsText>
                                    <MapContent>
                                        <iframe
                                            title="map"
                                            src={eventpostData.mapLink}
                                        ></iframe>
                                    </MapContent>

                                    <InnerTitle>
                                        Other Information of Event
                                    </InnerTitle>
                                    <DetailsText>
                                        {eventpostData.detailsText1 &&
                                            eventpostData.detailsText1}
                                    </DetailsText>
                                    <DetailsText>
                                        {eventpostData.detailsText2 &&
                                            eventpostData.detailsText2}
                                    </DetailsText>

                                    <InnerTitle>Current Sponsors.</InnerTitle>
                                    <DetailsText>
                                        {eventpostData.detailsText1 &&
                                            eventpostData.detailsText1}
                                    </DetailsText>

                                    <div className="brand-logo-area brand-logo-default-area p-0">
                                        <div className="brand-logo-content"></div>
                                    </div>
                                </EventDetails>

                                <InnerTitle>Why Join This Event?</InnerTitle>
                                <DetailsText>
                                    {eventpostData.detailsText1 &&
                                        eventpostData.detailsText1}
                                </DetailsText>
                                <DetailsText>
                                    {eventpostData.detailsText2 &&
                                        eventpostData.detailsText2}
                                </DetailsText>
                                <ButtonWrap>
                                    <Button path="#" color="gradient">
                                        Join Now
                                        <StaticImage
                                            className="icon icon-img"
                                            src="../../data/images/icons/arrow-line-right2.png"
                                            alt="Icon"
                                        />
                                    </Button>
                                    <Button
                                        path="tel://+88469963467"
                                        color="border-normal"
                                        sx={{
                                            ml: "5px",
                                            border: "2px solid #ddd",
                                        }}
                                    >
                                        <StaticImage
                                            className="icon icon-img icon-style"
                                            src="../../data/images/icons/call.png"
                                            alt="Icon"
                                        />
                                        +88 469 963 467
                                    </Button>
                                </ButtonWrap>
                            </EventDetailsContentArea>
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </EventDetailsArea>
        </Layout>
    );
};

EventPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const eventpostQuery = graphql`
    query EventPostsBySlug($slug: String!) {
        eventJson(fields: { slug: { eq: $slug } }) {
            id
            title
            eventDate
            eventSubject
            eventTime
            eventAddress
            eventSpeaker
            detailsText1
            detailsText2
            mapLink
            thumbImg {
                childImageSharp {
                    gatsbyImageData(width: 800)
                }
            }
            fields {
                slug
            }
        }
    }
`;
export default EventPosts;
