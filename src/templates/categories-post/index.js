import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import BlogSidebar from "@containers/blog/blog-sideber";
import BlogList from "../../components/blog/list-blog";
import { BlogPostContentArea, BlogDetailsArea } from "./style";

const CategorisPosts = ({ data, location, pageContext }) => {
    return (
        <Layout>
            <SEO title={"Blog Categories Post"} pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={"Blog Cag Post"}
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

CategorisPosts.propTypes = {
    data: PropTypes.object,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export const CategorieQuery = graphql`
    query($categorie: String!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { tags: { in: [$categorie] } } }
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
export default CategorisPosts;
