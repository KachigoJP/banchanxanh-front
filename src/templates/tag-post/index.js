import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import BlogList from "../../components/blog/list-blog";
import { BlogPostContentArea, BlogDetailsArea } from "./style";

const TagPosts = ({ data, location, pageContext }) => {
    const { tag } = pageContext;

    return (
        <Layout>
            <SEO title={"Blog Tags Post"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                crumbLabel="Blog Tag Post"
                title="Blog Tag Post"
            />
            <BlogDetailsArea>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <BlogPostContentArea>
                                {data.allMarkdownRemark.edges.map((blog, i) => {
                                    return (
                                        <BlogList
                                            key={i}
                                            title={blog.node.frontmatter.title}
                                            thume_image={
                                                blog.node.frontmatter
                                                    .thume_image
                                            }
                                            categories={
                                                blog.node.frontmatter.categories
                                            }
                                            body={blog.node.excerpt}
                                            date={blog.node.frontmatter.date}
                                            slug={blog.node.fields.slug}
                                            postAuthor={
                                                blog.node.frontmatter.author
                                            }
                                        />
                                    );
                                })}
                            </BlogPostContentArea>
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

TagPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const tagQuery = graphql`
    query ($tag: String!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        author
                        categories
                        date(formatString: "MMMM DD YYYY")
                        tags
                        quote_text
                        title
                        thume_image {
                            childImageSharp {
                                gatsbyImageData(width: 750, height: 400)
                            }
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 100, truncate: true)
                }
            }
        }
    }
`;
export default TagPosts;
