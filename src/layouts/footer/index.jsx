/** @jsx jsx */
import { jsx } from "theme-ui";
import HeartIcon from "@assets/images/svg/heart.svg";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "@components/logo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    FooterWrap,
    FooterMain,
    WidgetItem,
    AboutWidget,
    AboutWidgetText,
    WidgetTotalRaised,
    RaisedTitle,
    CopyrightText,
    TaisedAmount,
    WidgetTitle,
    WidgetGallery,
    GalleryItem,
    WidgetMenuWrap,
    NavMenu,
    NavItem,
    FooterShapeLayer,
} from "./style";

const Footer = () => {
    const footerQuery = useStaticQuery(graphql`
        query FooterQuery {
            footerJson {
                id
                quickLink {
                    path
                    text
                }
                quickLinkTwo {
                    path
                    text
                }
                gallery {
                    galleryitem {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    path
                }
                footerShapeImage {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                footerAbout
                raisedAmount
                menuTitle
                galleryTitle
            }
        }
    `);
    const {
        footerAbout,
        raisedAmount,
        menuTitle,
        galleryTitle,
        gallery,
        quickLink,
        quickLinkTwo,
        footerShapeImage,
    } = footerQuery.footerJson;
    const footerimage = getImage(footerShapeImage);
    return (
        <FooterWrap>
            <FooterMain>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <AboutWidget>
                                    <Logo className="footer-logo" />
                                    <AboutWidgetText>
                                        {footerAbout}
                                    </AboutWidgetText>
                                    <WidgetTotalRaised>
                                        <RaisedTitle>Total Raised:</RaisedTitle>
                                        <TaisedAmount>
                                            {raisedAmount}
                                        </TaisedAmount>
                                    </WidgetTotalRaised>
                                </AboutWidget>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem>
                                <WidgetTitle>{galleryTitle}</WidgetTitle>
                                <WidgetGallery>
                                    <Row className="row-cols-3 row-gutter-10">
                                        {gallery.map((item, i) => {
                                            const imageGallery = getImage(
                                                item.galleryitem
                                            );
                                            return (
                                                <Col key={`gallery-${i}`}>
                                                    <GalleryItem>
                                                        <GatsbyImage
                                                            image={imageGallery}
                                                            alt="Givest-HasTech"
                                                        />
                                                        <a
                                                            className="icon"
                                                            href="#!"
                                                        >
                                                            <i className="icofont-instagram"></i>
                                                        </a>
                                                    </GalleryItem>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </WidgetGallery>
                            </WidgetItem>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <WidgetItem className="menu-wrap-two-column">
                                <WidgetTitle>{menuTitle}</WidgetTitle>
                                <WidgetMenuWrap>
                                    <Row>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="pr-sm-5"
                                        >
                                            <NavMenu>
                                                {quickLink.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}-one`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>

                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={6}
                                            className="col-6 pl-sm-5"
                                        >
                                            <NavMenu className="align-right">
                                                {quickLinkTwo.map(
                                                    (linkItem, i) => (
                                                        <NavItem
                                                            key={`id-${i}`}
                                                        >
                                                            <Link
                                                                to={
                                                                    linkItem.path
                                                                }
                                                            >
                                                                {linkItem.text}
                                                            </Link>
                                                        </NavItem>
                                                    )
                                                )}
                                            </NavMenu>
                                        </Col>
                                    </Row>
                                </WidgetMenuWrap>
                            </WidgetItem>
                        </Col>
                    </Row>
                </Container>
                {/* <div className="scroll-to-top"><img src="assets/img/icons/arrow-up-line.png" alt="Icon-Image" /></div> */}
            </FooterMain>
            <Container>
                <Row>
                    <Col sx={{ textAlign: "center" }}>
                        <CopyrightText>
                            &copy; {new Date().getFullYear()} Givest. Made with{" "}
                            <HeartIcon /> by{" "}
                            <a
                                href="https://hasthemes.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                HasThemes
                            </a>
                        </CopyrightText>
                    </Col>
                </Row>
            </Container>
            <FooterShapeLayer>
                <GatsbyImage image={footerimage} alt="Image-Givest" />
            </FooterShapeLayer>
        </FooterWrap>
    );
};

export default Footer;
