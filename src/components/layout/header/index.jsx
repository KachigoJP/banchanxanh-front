
import { useEffect, useState, Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

// Source
import "@assets/css/bootstrap.css";
import "@assets/css/flaticon.css";
import "@assets/css/elegantIcons.css";
import "@assets/css/modal-video.min.css";
import Logo from "@components/logo";
import Button from "@components/common/button";
import MainMenu from "@components/ui/menu/main-menu";
import MobileNavMenu from "@components/ui/menu/mobile-menu";

// import {
//     HeaderTop,
//     HeaderMenuArea,
//     HeaderActionArea,
//     MobileMenuArea,
//     OffCanvasInner,
//     MobileMenuBtn,
//     ButtonBoxArea,
//     OffCanvasContent,
//     OffCanvasHeader,
//     CloseAction,
//     ButtonClose,
// } from "./style";
 import * as Styled from "./style";

const Header = () => {
    const allmenuData = useStaticQuery(graphql`
        query AllmenuQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        isSubmenu
                    }
                }
            }
        }
    `);
    const menuData = allmenuData.allMenuJson.edges;

    // Sticky Menu
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);

    useEffect(() => {
        const header = document.querySelector(".header-section");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };

    const SearchHandaler = () => {
        setOfcanvasSearchOpen((prev) => !prev);
    };

    return (
        <Fragment>
            <Styled.HeaderTop
                className={`header-section ${scroll > headerTop ? "is-sticky" : ""
                    }`}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3} md={4} sm={5} xs={8}>
                            <Logo />
                        </Col>
                        <Col lg={9} md={8} sm={7} xs={4}>
                            <Styled.HeaderMenuArea>
                                <MainMenu allmenuData={menuData} />

                                <Styled.HeaderActionArea>
                                    <Styled.MobileMenuBtn
                                        onClick={ofcanvasHandaler}
                                        onKeyDown={SearchHandaler}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Styled.MobileMenuBtn>
                                    <Styled.ButtonBoxArea>
                                        <Button
                                            sx={{ ml: "15px" }}
                                            type="button"
                                            path="/contact-us"
                                            color="gradient"
                                        >
                                            Liên hệ
                                            <i className="flaticon-right-arrow"></i>
                                        </Button>
                                    </Styled.ButtonBoxArea>
                                </Styled.HeaderActionArea>
                            </Styled.HeaderMenuArea>
                        </Col>
                    </Row>
                </Container>
            </Styled.HeaderTop>
            <Styled.MobileMenuArea
                className={`${ofcanvasOpen ? "mobile-menu-open" : ""}`}
            >
                <Styled.OffCanvasInner>
                    <div
                        className="OffCanvasContent"
                        onClick={ofcanvasHandaler}
                        onKeyDown={SearchHandaler}
                        role="button"
                        tabIndex={0}
                    ></div>
                    <Styled.OffCanvasContent>
                        <Styled.OffCanvasHeader>
                            <Logo />
                            <Styled.CloseAction>
                                <ButtonClose
                                    onClick={ofcanvasHandaler}
                                    onKeyDown={SearchHandaler}
                                >
                                    <i className="icofont-close"></i>
                                </ButtonClose>
                            </Styled.CloseAction>
                        </Styled.OffCanvasHeader>

                        <MobileNavMenu MobilemenuData={menuData} />
                    </Styled.OffCanvasContent>
                </Styled.OffCanvasInner>
            </Styled.MobileMenuArea>
        </Fragment>
    );
};

export default Header;
