/** @jsx jsx */
import { jsx } from "theme-ui";
import BlogList from "@components/blog/list-blog";
import { BlogPostContentArea, PaginationArea } from "./style";
import { graphql, useStaticQuery } from "gatsby";
import PaginationLinks from "../../../components/pagination";

const BlogPostArea = () => {
    const listBlogQuery = useStaticQuery(graphql`
        query ListBlogQuery {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 3
            ) {
                totalCount
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
                                    gatsbyImageData(width: 750, height: 400)
                                }
                            }
                        }
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 225)
                    }
                }
            }
        }
    `);
    const { totalCount } = listBlogQuery.allMarkdownRemark;
    const listBlogData = listBlogQuery.allMarkdownRemark.edges;
    const postsPerPage = 3;
    let numberOfPages = Math.ceil(totalCount / postsPerPage);
    return (
        <BlogPostContentArea>
            {listBlogData &&
                listBlogData.map((blog, i) => {
                    return (
                        <BlogList
                            key={i}
                            title={blog.node.frontmatter.title}
                            thume_image={blog.node.frontmatter.thume_image}
                            categories={blog.node.frontmatter.categories}
                            body={blog.node.excerpt}
                            date={blog.node.frontmatter.date}
                            slug={blog.node.fields.slug}
                            postAuthor={blog.node.frontmatter.author}
                        />
                    );
                })}

            <PaginationArea>
                <PaginationLinks
                    currentPage={1}
                    numberOfPages={numberOfPages}
                />
            </PaginationArea>
        </BlogPostContentArea>
    );
};

export default BlogPostArea;
