/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { Row, Container, Col } from "react-bootstrap";
import BlogPostArea from "../containers/blog/blog-post";
import BlogSidebar from "../containers/blog/blog-sideber";

const BlogPage = ({ location, pageContext }) => {
    return (
        <Layout>
            <SEO title="Blog" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog"
            />
            <div
                className="blog-grid-area"
                sx={{
                    pt: ["70px", "100px", "120px", "150px"],
                    pb: ["280px", "300px", "300px", "390px"],
                }}
            >
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogPostArea />
                        </Col>
                        <Col lg={4}>
                            <BlogSidebar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

BlogPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default BlogPage;
