/** @jsx jsx */
import { jsx } from "theme-ui";
import LatestBlogItem from "@components/blog/latest-blog";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@components/title";
import { SectionArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";

const LatestBlog = () => {
    const latestBlogQuery = useStaticQuery(graphql`
        query LatestBlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM DD YYYY")
                            categories
                            author
                            thume_image {
                                childImageSharp {
                                    gatsbyImageData(width: 580, height: 570)
                                }
                            }
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 55)
                    }
                }
            }
        }
    `);
    const latestBlogData = latestBlogQuery.allMarkdownRemark.edges;
    return (
        <SectionArea>
            <Container>
                <Row>
                    <Col md={8} lg={6} className="m-auto">
                        <SectionTitle
                            textCenter
                            titleStyle
                            sx={{
                                mb: ["30px", "50px", "80px", "110", "123px"],
                            }}
                            subTitle={"Blog Post"}
                            title={"Latest News From Givest Blog"}
                        />
                    </Col>
                </Row>
                <Row>
                    {latestBlogData &&
                        latestBlogData.slice(0, 3).map((blog) => {
                            return (
                                <Col lg={4} md={6} sm={6} key={blog.node.id}>
                                    <LatestBlogItem
                                        title={blog.node.frontmatter.title}
                                        thume_image={
                                            blog.node.frontmatter.thume_image
                                        }
                                        categories={
                                            blog.node.frontmatter.categories
                                        }
                                        body={blog.node.excerpt}
                                        date={blog.node.frontmatter.date}
                                        postAuthor={
                                            blog.node.frontmatter.author
                                        }
                                        slug={blog.node.fields.slug}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </SectionArea>
    );
};

export default LatestBlog;
